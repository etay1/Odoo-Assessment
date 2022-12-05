dictionary = {
     'a': [0, 1, 2],
     'b': [1, 2, 3],
     'c': [0, 3]
}

klist = list(dictionary.keys())
vlist = list(dictionary.values())
mlist = []

x = int(input("search: "))

for i in range(len(vlist)):
    for k in range(len(vlist[i])):
        if x == vlist[i][k]:
            mlist.append(klist[i])
print(mlist)
