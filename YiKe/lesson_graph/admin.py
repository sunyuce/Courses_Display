from django.contrib import admin
from .models import Graph

# Register your models here

admin.site.site_header = '易课'  # 设置header
admin.site.site_title = '易课'   # 设置title
admin.site.index_title = '易课'


admin.site.register(Graph)