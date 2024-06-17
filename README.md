This is a project from BigTao and BigCe せんせい  
首先我们利用 neo4j 自带的 neo4j admin 导入我们的数据进入 neo4j 图数据库  
启动图数据库后，进入项目的/graph 下的 neo4j_driver.py 修改成自己的图数据连接信息  
在/graph 文件夹下的 views.py 文件下最后位置修改需要展示的前端页面路径  
配置完后，在终端中 cd lesson_graph，pythton manage.py runserver 就可以在终端弹出的网址看到想要的结果了

本项目中采用的是 python3.8 neo4j5.20 但是版本应该问题不大

安装 websocket-client
