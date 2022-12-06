import re

#test data
s = "'Hi'"
s1 = "'Hi\""
# regex expression notations => "^STARTS.*ENDS$"
if(re.search("^'.*'$" or "^\".*\"$", s)):
    print("Match")
else: print("Does not match")

if(re.search("^'.*'$" or "^\".*\"$", s1)):
    print("Match")
else: print("Does not match")

#input testing
# userString = input("Check if a string is encapsulated in either\n"
#                    "Two double quotations OR\n"
#                    "Two single quotations:\n")
# if(re.search("^'.*'$" or "^\".*\"$", userString)):
#     print("Match")
# else: print("Does not match")
