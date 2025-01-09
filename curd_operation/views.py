from django.http import HttpResponse,HttpResponseRedirect
from django.shortcuts import render,redirect
from members.models import members
def homepage(request):
    
    emp=members.objects.all()
    data ={'emp':emp}
    return render(request,'index.html',data)
def add(request):
    if request.method=='POST':
       name=request.POST.get('name')
       email=request.POST.get('email')
       address=request.POST.get('address')
       phone=request.POST.get('phone')
       en=members(
           name=name,
           email=email,
           address=address,
           phone=phone
       )
       en.save()
       return redirect('home')
                              
    return render(request,'index.html')

def edit(request,id):
    if request.method=='POST':
       
       name=request.POST.get('name')
       email=request.POST.get('email')
       address=request.POST.get('address')
       phone=request.POST.get('phone')
       en=members(
           id=id,
           name=name,
           email=email,
           address=address,
           phone=phone
       )
       en.save()
       return redirect('home')
    return redirect(request,'index.html')
def delete(request,id):
    emp=members.objects.filter(id=id).delete()
    data={'emp':emp}
    return redirect('home')

    return redirect(request,'index.html',data) 