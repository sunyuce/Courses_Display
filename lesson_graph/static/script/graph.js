document.getElementById('school-select').addEventListener('change', function() {
    const selectedSchool = this.value;

    toggleLoader(true);
    fetch(`/Web/?school=${selectedSchool}`, {
        headers: {
            'X-Requested-With': 'XMLHttpRequest'
        }
    })
    .then(response => response.json())
    .then(data => {
        updateGraph(data.nodes, data.edges);
        toggleLoader(false);
    });
});

// document.addEventListener('DOMContentLoaded', function() {
//     const selectedSchool = document.getElementById('school-select').value;
//     toggleLoader(true);
//     fetch(`/?school=${selectedSchool}`, {
//         headers: {
//             'X-Requested-With': 'XMLHttpRequest'
//         }
//     })
//     .then(response => response.json())
//     .then(data => {
//         updateGraph(data.nodes, data.edges);
//         toggleLoader(false);
//     });
// });

const width = document.getElementById('graph').clientWidth;
const height = document.getElementById('graph').clientHeight;

const svg = d3.select("#graph").append("svg")
    .attr("width", width)
    .attr("height", height)
    .call(d3.zoom().on("zoom", function (event) {
        svg.attr("transform", event.transform)
    }))
    .append("g");

let simulation;

function updateGraph(newNodes, newLinks) {
    svg.selectAll("*").remove();

    const nodeMap = new Map();
    newLinks.forEach(link => {
        if (!nodeMap.has(link.source)) {
            nodeMap.set(link.source, []);
        }
        if (!nodeMap.has(link.target)) {
            nodeMap.set(link.target, []);
        }
        nodeMap.get(link.source).push(link.target);
        nodeMap.get(link.target).push(link.source);
    });

    simulation = d3.forceSimulation(newNodes)
        .force("link", d3.forceLink(newLinks).id(d => d.id).distance(200))
        .force("charge", d3.forceManyBody().strength(-500))// 调整斥力强度以使节点更紧密
        .force("center", d3.forceCenter(width / 2, height / 2))
        .force("x", d3.forceX(width / 2).strength(0.1))  // 添加水平力
        .force("y", d3.forceY(height / 2).strength(0.1)) // 添加垂直力
        .force("collide", d3.forceCollide().radius(d => d.r + 10).iterations(2));

    const link = svg.append("g")
        .attr("class", "links")
        .selectAll("line")
        .data(newLinks)
        .enter().append("line")
        .attr("class", "link");

    const node = svg.append("g")
        .attr("class", "nodes")
        .selectAll("circle")
        .data(newNodes)
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", 13)
        .style("fill","#4CAF50")
        .style("stroke","#fff")
        .style("stroke-width","1.5px")
        .on("click", function(event, d) {
            event.stopPropagation();
            highlightNodes.call(this, event, d);
        })
        .call(d3.drag()
            .on("start", dragstarted)
            .on("drag", dragged)
            .on("end", dragended));

    const text = svg.append("g")
        .attr("class", "texts")
        .selectAll("text")
        .data(newNodes)
        .enter().append("text")
        .attr("class", "text-label")
        .attr("dx", 15)
        .attr("dy", 4)
        .text(d => d.label);

    simulation.on("tick", () => {
        link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        node
            .attr("cx", d => d.x)
            .attr("cy", d => d.y);

        text
            .attr("x", d => d.x)
            .attr("y", d => d.y);
    });

    d3.select('#graph').on('click', function(event) {
        resetStyles();
    });

    function resetStyles() {
        node.style("opacity", 1)
            .style("fill", "#4CAF50");
        link.style("opacity", 0.6)
            .style("stroke", "#999");
        text.style("fill", "#000")
            .style("opacity", 1.0)
            .style("font-weight", "normal");
    }

    function highlightNodes(event, d) {
        node.style("opacity", 0.1);
        link.style("opacity", 0.1);
        text.style("opacity", 0.3);

        d3.select(this).style("fill", "#FF5733").style("opacity", 1);

        if (nodeMap.has(d.id)) {
            nodeMap.get(d.id).forEach(id => {
                const connectedNode = node.nodes().find(n => n.__data__.id === id);
                const connectedText = text.nodes().find(t => t.__data__.id === id);
                if (connectedNode) {
                    d3.select(connectedNode)
                        .style("fill", "#FF5733")
                        .style("opacity", 1);
                }
                if (connectedText) {
                    d3.select(connectedText)
                        .style("fill", "#1F75FE")
                        .style("opacity", 1)
                        .style("font-weight", "bold");
                }
            });

            link.filter(l => l.source.id === d.id || l.target.id === d.id)
                .style("stroke", "#FF5733")
                .style("opacity", 1);
            text.filter(t => t.id === d.id)
                .style("fill", "#1F75FE")
                .style("opacity", 1)
                .style("font-weight", "bold");
        } else {
            console.log(`Node with id ${d.id} not found in nodeMap`);
        }
    }
}

function dragstarted(event, d) {
    if (!event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
}

function dragged(event, d) {
    simulation.alphaTarget(0.3).restart();
    d.fx = event.x;
    d.fy = event.y;
}

function dragended(event, d) {
    if (!event.active) simulation.alphaTarget(0);
    d.fx = d.x;
    d.fy = d.y;
}

function toggleLoader(show) {
    const loader = document.getElementById('loader');
    if (show) {
        loader.style.display = 'block';
    } else {
        loader.style.display = 'none';
    }
}

// Search functionality
document.getElementById('search-button').addEventListener('click', function() {
    const searchValue = document.getElementById('search-input').value;
    searchGraph(searchValue);
});
document.getElementById('search-input').addEventListener('keydown', function(event) {
// 检查是否按下了回车键（键码为13）
if (event.keyCode === 13) {
    // 阻止默认的回车键行为（比如在表单中提交表单）
    event.preventDefault();
    // 执行搜索按钮的点击事件
    document.getElementById('search-button').click();
}
});

function searchGraph(className) {
    const allNodes = simulation.nodes();
    const targetNode = allNodes.find(node => node.label === className);
    const searchContainer = d3.select("#searchgraph");

    // 移除之前插入的图片（如果存在）
    searchContainer.select("img").remove();
    // 移除之前的图谱结果
    searchContainer.select("svg").remove();

    if (!targetNode) {
        // 在这里插入图片
        searchContainer.append("img")
            .attr("src", "{% static 'unfound.png' %}")
            .attr("alt", "No matching class found")
            .style("max-width", "60%")
            .style("max-height", "60%")
            .style("display", "block") // 确保图片作为块级元素
            .style("margin", "0 auto") // 图片水平居中
        return;
    }

    const connectedNodes = [];
    const connectedLinks = [];

    simulation.force("link").links().forEach(link => {
        if (link.source.id === targetNode.id || link.target.id === targetNode.id) {
            connectedLinks.push(link);
            connectedNodes.push(link.source.id === targetNode.id ? link.target : link.source);
        }
    });

    displaySearchGraph(targetNode, connectedNodes, connectedLinks);
}


function displaySearchGraph(centerNode, surroundingNodes, links) {
    const container = d3.select("#searchgraph");
    container.select("svg").remove();
    const width = container.node().clientWidth;
    const height = container.node().clientHeight;


    const svg = container.append("svg")
        .attr("width", width)
        .attr("height", height);

    const g = svg.append("g");

    // Add zoom behavior to the SVG
    const zoom = d3.zoom()
        .scaleExtent([0.1, 10])
        .on("zoom", (event) => {
            g.attr("transform", event.transform);
        });

    svg.call(zoom);

    const link = g.selectAll(".link")
        .data(links)
        .enter().append("line")
        // .attr("class", "link")
        .style("stroke", "#999")
        .style("stroke-width", 1.5);

    const node = g.selectAll(".node")
        .data([centerNode, ...surroundingNodes])
        .enter().append("circle")
        .attr("class", "node")
        .attr("r", d => d.id === centerNode.id ? 20 : 13)
        .attr("fill", d => d.id === centerNode.id ? "#4169E1" : "#87CEEB");

    const text = g.selectAll(".text-label")
        .data([centerNode, ...surroundingNodes])
        .enter().append("text")
        // .attr("class", "text-label")
        .attr("dx", 15)
        .attr("dy", 4)
        .style("font-weight","bold")
        .style("pointer-events","none")
        .style("fill","#000")
        .style("font-size","12px")
        .text(d => d.label);


    const radius = Math.min(width, height) / 3;
    const angleStep = (2 * Math.PI) / surroundingNodes.length;

    surroundingNodes.forEach((node, index) => {
        node.x = width / 2 + radius * Math.cos(index * angleStep);
        node.y = height / 2 + radius * Math.sin(index * angleStep);
    });

    centerNode.x = width / 2;
    centerNode.y = height / 2;

    link.attr("x1", d => d.source.x)
        .attr("y1", d => d.source.y)
        .attr("x2", d => d.target.x)
        .attr("y2", d => d.target.y);

    node.attr("cx", d => d.x)
        .attr("cy", d => d.y);

    text.attr("x", d => d.x)
        .attr("y", d => d.y);
}

