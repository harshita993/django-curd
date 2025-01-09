from django.db import models
class members(models.Model):
    class Meta:
        db_table = "member_detail"
    name=models.CharField(max_length=100)
    email=models.EmailField(max_length=150)
    address=models.TextField(max_length=500)
    phone=models.CharField(max_length=10)
    def __str__(self):
        return self.name
# Create your models here.
