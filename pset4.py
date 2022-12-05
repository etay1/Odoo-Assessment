s = input("Enter Camel Case: ")
print(''.join((map(lambda x: x if x.islower() else "."+x, s))).lower())
