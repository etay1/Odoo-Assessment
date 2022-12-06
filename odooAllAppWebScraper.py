import requests
from bs4 import BeautifulSoup
URL = "https://www.odoo.com/page/all-apps"
page = requests.get(URL)

soup = BeautifulSoup(page.content, "html.parser")
app_family = soup.find_all("div","o_nav_app_family")
#print(app_family)

s = ""
for i in app_family:
    s = s + ' '.join(i) + '\n'

keys = s.split("\n")
keys.remove(keys[len(keys) - 1])
# print(keys)
# print(len(app_family))

#--------------------------------------------
app_individual = soup.find_all("div","container py-5")
app_individual = soup.find_all("h5","my-0")

s1= ""
for i in app_individual:
    s1 = s1 + ' '.join(i) + "\n"

s1 = s1[:57] + "_" + s1[57:] #Website Apps good
s1 = s1[:103] + "_" + s1[103:] #Sales Apps good
s1 = s1[:149] + "_" + s1[149:] #Finance Apps good
s1 = s1[:213] + "_" + s1[213:] #Inventory & Manufacturing Apps
s1 = s1[:272] + "_" + s1[272:] #Human Resources Apps
s1 = s1[:356] + "_" + s1[356:] #Marketing Apps
s1 = s1[:420] + "_" + s1[420:] #Service Apps
s1 = s1[:448] + "_" + s1[448:] #Productivity Apps

values = s1.split("_")
values.remove(values[len(values) - 1])

values.remove(values[len(values)-1])
# print(values)

valueslist = []
for i in values:
    nlines = i.count("\n") + 1
    valueslist.append(nlines)
# print(len(values))
# print(valueslist)


my_dict = dict(zip(keys,valueslist))
print(my_dict)
