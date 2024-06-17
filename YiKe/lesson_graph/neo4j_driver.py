from py2neo import Graph
#更改成你的neo4j数据库
graph_db = Graph("bolt://localhost:7687", auth=("neo4j", "cpc20031120"))

