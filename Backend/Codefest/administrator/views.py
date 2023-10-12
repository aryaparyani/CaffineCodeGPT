from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from .models import Administrator
from appointment.models import Appointment
from client.models import Client
from therapist.models import Therapist

# Create your views here.
def home(request, slug):
    #Fetching all admin details
    #admin_details = list(Administrator.objects.values())
    #print(admin_details)

    #Fetching all appointment details
    #appointment_details = list(Appointment.objects.values())
    #print(appointment_details)

    #Fetching all appointments based on admin id
    appointment_details=Appointment.objects.filter(admin_id_id=slug) # List of query set 
    details = list(appointment_details.values())

    print(details)

    for data in details:
        #Fetching client data based on client id in appointments object
        cid = data['client_id_id']
        client_data = list(Client.objects.filter(client_id=cid).values())
        data["client_data"] = client_data[0]

        #Fetching therapist data based on therapist id in appointments object
        tid = data['therapist_id_id']
        therapist_data = list(Therapist.objects.filter(therapist_id=tid).values())
        data["therapist_data"] = therapist_data[0]

        #Fetching admin data based on admin id in appointments object
        aid = data['admin_id_id']
        admin_data = list(Administrator.objects.filter(admin_id=aid).values())
        data["admin_data"] = admin_data[0]

    return JsonResponse({"appointment_details" : details})

def getTherapist(request):
    therapist_details = list(Therapist.objects.values())
    print(therapist_details)
    return JsonResponse({"therapist_details": therapist_details})

def addTherapist(request):
    return HttpResponse("Add Therapist details")