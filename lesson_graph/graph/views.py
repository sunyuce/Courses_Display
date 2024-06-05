import json
from django.shortcuts import render
from django.http import JsonResponse
from .neo4j_driver import graph_db
def get_graph_data(request):
    school = request.GET.get('school', '计算机与计算科学学院')

    # 查询所有节点
    nodes_query = f"""
    MATCH (n:LessonNode)
    WHERE n.school = '{school}'
    RETURN n
    """
    nodes_result = graph_db.run(nodes_query)

    # 查询所有关系
    relationships_query = f"""
    MATCH (n:LessonNode)-[r:RELATED_TO]->(m:LessonNode)
    WHERE n.school = '{school}' AND m.school = '{school}'
    RETURN n, r, m
    """
    relationships_result = graph_db.run(relationships_query)

    nodes = []
    edges = []
    node_ids = set()

    # 处理节点结果
    for record in nodes_result:
        node = record['n']
        if node.identity not in node_ids:
            nodes.append({"id": node.identity, "label": node['classname'], "school": node['school']})
            node_ids.add(node.identity)

    # 处理关系结果
    for record in relationships_result:
        node1 = record['n']
        node2 = record['m']
        rel = record['r']

        if node1.identity not in node_ids:
            nodes.append({"id": node1.identity, "label": node1['classname'], "school": node1['school']})
            node_ids.add(node1.identity)

        if node2.identity not in node_ids:
            nodes.append({"id": node2.identity, "label": node2['classname'], "school": node2['school']})
            node_ids.add(node2.identity)

        edges.append({"source": node1.identity, "target": node2.identity})

    context = {
        'nodes': nodes,
        'edges': edges,
        'selected_school': school
    }

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse(context)
    else:
        return render(request, 'graph/test_delicate.html', context)
    
def Web(request):
    school = request.GET.get('school', '计算机与计算科学学院')

    # 查询所有节点
    nodes_query = f"""
        MATCH (n:LessonNode)
        WHERE n.school = '{school}'
        RETURN n
        """
    nodes_result = graph_db.run(nodes_query)

    # 查询所有关系
    relationships_query = f"""
        MATCH (n:LessonNode)-[r:RELATED_TO]->(m:LessonNode)
        WHERE n.school = '{school}' AND m.school = '{school}'
        RETURN n, r, m
        """
    relationships_result = graph_db.run(relationships_query)

    nodes = []
    edges = []
    node_ids = set()

    # 处理节点结果
    for record in nodes_result:
        node = record['n']
        if node.identity not in node_ids:
            nodes.append({"id": node.identity, "label": node['classname'], "school": node['school']})
            node_ids.add(node.identity)

    # 处理关系结果
    for record in relationships_result:
        node1 = record['n']
        node2 = record['m']
        rel = record['r']

        if node1.identity not in node_ids:
            nodes.append({"id": node1.identity, "label": node1['classname'], "school": node1['school']})
            node_ids.add(node1.identity)

        if node2.identity not in node_ids:
            nodes.append({"id": node2.identity, "label": node2['classname'], "school": node2['school']})
            node_ids.add(node2.identity)

        edges.append({"source": node1.identity, "target": node2.identity})

    context = {
        'nodes': nodes,
        'edges': edges,
        'selected_school': school
    }

    if request.headers.get('x-requested-with') == 'XMLHttpRequest':
        return JsonResponse(context)
    else:
        return render(request, 'graph/test_delicate.html', context)
    # return render(request,"graph/test_delicate.html")


