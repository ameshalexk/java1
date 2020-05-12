# def select_odds(numbers)
#     box = []
#     i=0
#     while i<numbers.length
#       cup = numbers [i]
#       if cup%2!=0
#       box<<cup
#       end
#       i+=1
#     end
#     return box
#   end

#   print select_odds([13, 4, 3, 7, 6, 11]) # => [13, 3, 7, 11]
#   puts
#   print select_odds([2, 4, 6])            # => []


#   def count_e(word)
#     count = 0
#     i = 0
#     while i < word.length
#       char = word[i]
#       if char == "e"
#         count += 1
#       end
#       i += 1
#     end
#     return count
#   end


#   puts count_e("movie") # => 1
#   puts count_e("excellent") # => 3

# if 0
#   puts 'In Ruby, this will print'
# end

# a = "cruel world5484848  ugug7t 7gg7 87h7g7 6ff "
# puts a.scan(/\d+/)

# 'hello'.match('(.)\1')      #=> #<MatchData "ll" 1:"l">
# 'hello'.match('(.)\1')[0]   #=> "ll"


# def array_diff(a,b)
#   #your code here
#   box = []
#    a.each do |vard|
#     puts vard
#     if a[c] == b[c]
#       puts c
#       if a[c+1] == b[c]
#         puts c
#         box << c
#       end
#     # else a[c] != b[c]
#     #   box << c
#     # puts "not present"
#    end
#   end
#    return p box
# end

# array_diff([1,2,2],[1])

# best

def array_diff(a,b)
  box = []
  i = 0
  while i < a.length
    if a[i] == b [i]
      puts true
    else
      puts false
      box << a[i]
    end
      i += 1
    end
    i += 1
   return p box
end


# array_diff([1,2,2],[2])
