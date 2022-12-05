s = input("Enter Camel Case: ")
x = ''.join((map(lambda x: x if x.islower() else "."+x, s))).lower()
if x[0] == ".":
    x = s[0:]
print(x)
