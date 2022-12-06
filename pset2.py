def permutation(lst):
    # base cases
    if len(lst) == 0:
        return []

    if len(lst) == 1:
        return [lst]

    # n>1 cases
    l = []  # let l be an empty list

    #iterate through the lst and calc permutation
    for i in range(len(lst)):
        j = lst[i]


        #extract ls[i] and let it b j
        #remList = remaning list
        remList = lst[:i] + lst[i + 1:]

        # all permutations where  j is the first ele
        for p in permutation(remList):
            l.append([j] + p)
    return l


# tester
mylist = list([1,2,3])
for p in permutation(mylist):
    print(p)
