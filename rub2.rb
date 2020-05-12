def array_diff(a,b)
    box = []

    i=0
    while i< a.length
        if a.include? (b)
        puts true
        else
        puts false
        end
        i+= 1
    end

    # j=0
    # while j<b.length
    #     if b.include? (a[i])
    #     puts true
    #     else
    #     puts false
    #     end
    #     j+= 1
    # end
    # return p box
end



array_diff([1,2,3,5],[1,2,3,4,5])
# array_diff([1,2],[1]) = 2
# array_diff([1,2,2],[1]) = 22
# array_diff([1,2,2],[2]) = 1
# array_diff([1,2,2],[]) = 122
# array_diff([],[1,2]) = 12
