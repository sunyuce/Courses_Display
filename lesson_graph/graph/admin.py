from django.contrib import admin
from .models import Graph

# Register your models here

admin.site.site_header = 'SYC管理后台'  # 设置header
admin.site.site_title = 'SYC管理后台'   # 设置title
admin.site.index_title = 'SYC管理后台'


admin.site.register(Graph)