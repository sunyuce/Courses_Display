from django.db import models

# Create your models here.
class Status(models.TextChoices):
    UNSTARTED = 'u', "Not started yet"
    ONGOING = 'o', "Ongoing"
    FINISHED = 'f', "Finished"


class Graph(models.Model):
    name = models.CharField(verbose_name="Task name", max_length=65, unique=True)
    status = models.CharField(verbose_name="Task status", max_length=1, choices=Status.choices)
    
    class Meta:
        verbose_name = "class"
        verbose_name_plural = "class"

    def __str__(self):
        return self.name

from neomodel import StructuredNode, StringProperty, RelationshipTo, RelationshipFrom

class LessonNode(StructuredNode):
    classname = StringProperty(required=True)
    school = StringProperty(required=True)

    # 定义关系
    related_to = RelationshipTo('LessonNode', 'RELATED_TO')
    related_from = RelationshipFrom('LessonNode', 'RELATED_TO')

    def delete_node(self):
        self.delete()

    def update_node(self, classname, school):
        self.classname = classname
        self.school = school
        self.save()

    def create_relation(self, other_node):
        # 创建关系
        self.related_to.connect(other_node)

    def delete_relation(self, other_node):
        # 删除关系
        self.related_to.disconnect(other_node)

    def get_related_nodes(self):
        # 获取与当前节点相关的节点
        return self.related_to.all()