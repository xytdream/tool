from faker import Faker

# faker 对象，IN 为印度尼西亚
f = Faker('IN')
# 创建文件对象，文件名为phone.txt，写入模式为 a 表示追加
file = open('3.txt', 'a')

i = 0
j=0
while True:
    # num 是最开始生成的号码
    num = f.phone_number()
    # num1 是把 +、-、（）这些符号过滤之后的号码
    num1 = num.replace('+', '').replace('-', '').replace('(', '').replace(')', '').replace(' ', '')
    # 号码处理, 不是62开头的加上62
    if num1[0:2] != '62':
        num1 = '62' + num1
    # 两个判断条件，一是过滤之后的号码长度等于13，二是过滤之后的号码以62开头的
    if len(num1) == 13:
        # num2 存储符合条件的号码，其实也可以不用再写个变量num2重新赋值，符合条件的直接写入文件就行，速度会更快
        num2 = num1
        
        # 写入文件
        file.write(num2 + '\n')
        j = j+1
    
    if j == 2:
        break
    i += 1

# 关闭文件对象
file.close()
