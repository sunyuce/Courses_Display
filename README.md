This is a project from BigTao and BigCe せんせい  
首先我们利用neo4j自带的neo4j admin导入我们的数据进入neo4j图数据库  
启动图数据库后，进入项目的/graph下的neo4j_driver.py修改成自己的图数据连接信息  
在/graph文件夹下的views.py文件下最后位置修改需要展示的前端页面路径  
配置完后，在终端中cd lesson_graph，pythton manage.py runserver就可以在终端弹出的网址看到想要的结果了  

本项目中采用的是python3.8 neo4j5.20 但是版本应该问题不大  


