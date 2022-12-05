def permutation(s):

    #base cases
   if len(s) == 0 or len(s) == 1:
     return [s]

   perm_list = [] # resulting list
   for i in s:
     remaining_elements = [x for x in s if x != i]
     j = permutation(remaining_elements) # permutations of sublist

     for k in j:
       perm_list.append([i] + k)

   return perm_list

mylist = list([1,2,3])
for p in permutation(mylist):
    print(p)
