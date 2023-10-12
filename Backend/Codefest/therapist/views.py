from django.shortcuts import render, HttpResponse
from django.http import JsonResponse
from appointment.models import Appointment
from client.models import Client
from .models import Therapist
from administrator.models import Administrator


import smtplib

# Create your views here.
def home(request, slug):
    appointment_details=Appointment.objects.filter(therapist_id_id=slug) # List of query set 
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

def checkIn(request, slug):
    #Filter based on appointment id and update database to Ongoing status
    appointment_details=Appointment.objects.filter(appointment_id=slug) # List of query set 
    details = list(appointment_details.values())
    print(details)
    if details[0]['status'] != 'Ongoing':
        update_db=Appointment.objects.filter(appointment_id=slug).update(status='Ongoing')
        print(update_db)
        return JsonResponse({"output" : "DB updated"})
    else:
        return JsonResponse({"output" : "DB not updated"})

def checkOut(request, slug):
    appointment_details=Appointment.objects.filter(appointment_id=slug) # List of query set 
    details = list(appointment_details.values())
    print(details)
    if details[0]['status'] != 'Completed':
        update_db=Appointment.objects.filter(appointment_id=slug).update(status='Completed')
        print(update_db)
        return JsonResponse({"output" : "DB updated"})
    else:
        return JsonResponse({"output" : "DB not updated"})
    
def sos(request, slug):
    # creates SMTP session
    sender_email_id = "earlistening622@gmail.com"
    sender_email_id_password = "hpys hliy dczy qaky"
    receiver_email_id = "priyankaasrani1202@gmail.com"

    s = smtplib.SMTP('smtp.gmail.com', 587)
    
    # start TLS for security
    s.starttls()
    
    # Authentication
    s.login(sender_email_id, sender_email_id_password)
    
    # message to be sent
    message = "Help I am in Danger!"
    
    # sending the mail
    s.sendmail(sender_email_id, receiver_email_id, message)
    
    # terminating the session
    s.quit()

    #update_db=Appointment.objects.filter(appointment_id=slug).update(status='Alert')

    return HttpResponse("SOS")

