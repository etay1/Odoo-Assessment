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
print(s)
print(len(app_family))
