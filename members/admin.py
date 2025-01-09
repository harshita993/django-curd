from django.contrib import admin
from .models import *
class member_admin(admin.ModelAdmin):
    admin.site.register(members)
    
    
# Register your models here.
