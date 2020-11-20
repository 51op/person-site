> shell的重要性不用说，不管是运维还是开发都需要知道如何编写它,下面就跟着我一起慢慢深入了解shell的世界,[具体参照](https://tldp.org/LDP/abs/html/)


#### 第一部分 热身

  
 > 从sha-bang(#!)开始,先上一个小例子
 
#####  **1.1 清除/var/log 下的 log 文件**
```python
 #!/bin/bash
 #Cleanup
 #当然要使用root身份来运行这个脚本
cd /var/log
cat /dev/null > messages
cat /dev/null > wtmp
echo "Log files cleaned up."
```
 这根本就没什么稀奇的, 只不过是命令的堆积
 
#####  **1.2 一个改良版 清除/var/log 下的 log 文件**
```python
#!/bin/bash
#一个 Bash 脚本的正确的开头部分. 3
#Cleanup, 版本 2
#当然要使用 root 身份来运行.
#在此处插入代码,来打印错误消息,并且在不是 root 身份的时候退
LOG_DIR=/var/log
#如果使用变量,当然比把代码写死的好.
cd $LOG_DIR
cat /dev/null > messages
cat /dev/null > wtmp
echo "Logs cleaned up." 18
exit # 这个命令是一种正确并且合适的退出脚本的方法.
```
这个脚本看上去像一个完整的shell脚本

#####  **1.3 一个增强和广义的删除logfile文件**

```python
#!/bin/bash
#Cleanup, version 3
LOG_DIR=/var/log
ROOT_UID=0     # $UID 为 0 的时候,用户才具有根用户的权限
LINES=50       # 默认保存行数
E_XCD=86       # 不能修改目录
E_NOTROOT=87   # 非root执行将以87返回

if [ "$UID" -ne "$ROOT_UID" ] #root用户判断，不等于0则退出返回$E_NOTROOT
then
  echo "Must be root to run this script."
  exit $E_NOTROOT
fi  

if [ -n "$1" ] #测试是否有命令行参数(非空)
then
  lines=$1
else  
  lines=$LINES #默认
fi  
cd $LOG_DIR
if [ `pwd` != "$LOG_DIR" ]  # or   if [ "$PWD" != "$LOG_DIR" ]
then
  echo "Can't change to $LOG_DIR."
  exit $E_XCD
fi  
#更有效的方法是
#cd /var/log || {
#echo "Cannot change to necessary directory." >&2
#exit $E_XCD;
#}
tail -n $lines messages > mesg.temp  
mv mesg.temp messages               
echo "Log files cleaned up."
exit 0 #脚本退出前返回成功0

```
    
#### 第二部分 基本语法

> ##### **2.1 特殊字符**
  

| 字符 | 说明 |
| --- | --- |
| # | 注释,行首以#开头为注释(#!是个例外) |
| ; | 命令分隔符，可以用来在一行中写多个命令;echo hello;echo there |
| ;; | 终止“case”选项|
|.| .命令等价于 source 命令;做为隐藏文件名的一部分;字符匹配，匹配任何的单个字符|
|"|部分引用."STRING"阻止了一部分特殊字符|
|'|全引用. 'STRING' 阻止了全部特殊字符|
|\ |转义字符|
|` |后置引用，\`pwd\`|
|:|1.空命令,如："while :"   2.占位符; 如 ": ${username=`whoami`}" 参数替换,如果多个变量中有一个没有设置，就打印错误信息,如:": ${HOSTNAME?} ${USER?} ${MAIL?}"| 
|$ |在正则表达式中作为行结束符.|
|${} |参数替换 |
|\$*,\$@| 位置参数|
|$? | 退出状态变量.$?保存一个命令/一个函数或者脚本本身的退出状态. |
|$$|  进程 ID 变量.这个$$变量保存运行脚本进程 ID|
|()|命令组.如:1 (a=hello;echo $a)|
|{xxx,yyy,zzz...}|大括号扩展 cat {file1,file2,file3} > combined_file ;拷贝"file22.txt" 到"file22.backup"中 cp file22.{txt,backup}|
|{a..z}|echo {0..3} && echo {a..c}  # 0 1 2 3 a b c|
|{}|代码块 a=123{ a=321; } echo "a = $a"   # a = 321|

```python
#!/bin/bash
#Reading lines in /etc/fstab.
File=/etc/fstab
{
read line1
read line2
} < $File
echo "First line in $File is:"
echo "$line1"
echo
echo "Second line in $File is:"
echo "$line2"
exit 0
```

* * *

##### **2.2 变量和参数**

> 2.2.1 变量替换 

$ 变量替换操作符 
在""中还是会发生变量替换,这被叫做部分引用,或叫弱引用.而在''中就不会发生变 量替换,这叫做全引用,也叫强引用
注意 $var 与 ${var}的区别，不加{}在某些上下文可能发生错误，建议使用${var}这种格式变量引用
```python
a=375
he=$a
注意：赋值左右一定不要有空格
hello="A B  C   D"
echo $hello   # A B C D
echo "$hello" # A B  C   D
#引用一个变量将保留其中的空白
```
> 2.2.2 变量赋值

= 赋值操作符(前后都不能有空白)，不要与-eq 混淆,那个是 test,并不是赋值.

```python
a=879
echo "The value of \"a\" is $a."
let a=16+5 #let赋值

a=`ls -l`          
echo $a           
echo
echo "$a"    #变量引用，保留了空白
```

> 2.2.3 特殊的变量类型

Local variables 局部变量 使用local声明，仅在代码块中可以使用的变量，在函数中，仅在该功能代码块有意义
```python
func ()
{
  local loc_var=23      
  echo "\"loc_var\" in function = $loc_var"
  global_var=999          
  echo "\"global_var\" in function = $global_var"
}  
func
echo "\"loc_var\" outside function = $loc_var". #输出是空
echo "\"global_var\" outside function = $global_var" # 999

```
    
Environmental variables 全局变量,直接定义a=hello即可
Positional parameters 位置参数
$1..$9 代表脚本后参数列表
```python
 if [ -n "${10}" ]
 then
 echo "Parameter #10 is ${10}"
 fi
{}标记法是一种很好的使用位置参数的方法.这也需要间接引用 args=$# 位置参数的个数
lastarg=${!args} #输出最后一个参数

```
shift命令用于对参数的移动(左移)，通常用于在不知道传入参数个数的情况下依次遍历每个参数然后进行相应处理
```python
sum=0
until [ $# -eq 0 ]
do
        let sum+=$1
        shift 1
done
echo "sum:${sum}"


while [[ $# != 0 ]]; do
        let sum+=$1
        shift 1
done

echo "sum:${sum}"
```
##### **2.3 引用变量**
> 在一个双引号中直接使用变量名,一般都是没有问题的.它阻止了所有在引号中的特殊字符的重新解释,使用""来防止单词分割.[4]如果在参数列表中使用双引号,将使得双引号中的参数作为一个参 数.即使双引号中的字符串包含多个单词(也就是包含空白部分),也不会变为多个参数
```python
List="one two three"
for a in $List   #空白出拆分变量
do
  echo "$a"
done
echo "---"
for a in "$List"   #保留空白
do 
  echo "$a"
done
#输出结果 
one
two
three
---
one two three
```

##### **2.4 退出和退出状态**
exit 命令被用来结束脚本,就像 C 语言一样.他也会返回一个值来传给父进程,父进程会判断是否 可用.
每个命令都会返回一个 exit 状态(有时候也叫 return 状态).成功返回 0,如果返回一个非 0 值,通 常情况下都会被认为是一个错误码.一个编写良好的 UNIX 命令,程序,和工具都会返回一个 0 作为 退出码来表示成功,虽然偶尔也会有例外.
同样的,脚本中的函数和脚本本身都会返回退出状态.在脚本或者是脚本函数中执行的最后的命 令会决定退出状态.在脚本中,exit nnn 命令将会把 nnn 退出码传递给 shell(nnn 必须是 10 进制数 0-255)

```python
 exit $?
 exit 0
```
##### **2.5 Test结构**

* 一个 if/then 结构可以测试命令的返回值是否为 0(因为0表示成功)如果是的话,执行更多命令. 

* 有一个专用命令"["(左中括号,特殊字符).这个命令与 test 命令等价,但是出于效率上的考虑, 它是一个内建命令.这个命令把它的参数作为比较表达式或是文件测试,并且根据比较的结果, 返回一个退出码.
* 还有一个新的[[...]]扩展 test 命令，注意"[["是一个关键字,并不是一个命令.
* Bash 把[[ $a -lt $b ]]看作一个单独的元素,并且返回一个退出码.
* (())和let...也能返回一个退出码
```python
(( 0 && 1 ))                  
echo $?  # 1  
let "num = (( 0 && 1 ))"
echo $num   # 0
let "num = (( 0 && 1 ))"
echo $?     # 1  


(( 200 || 11 ))             
echo $?     # 0 
let "num = (( 200 || 11 ))"
echo $num   # 1
let "num = (( 200 || 11 ))"
echo $?     # 0     ***
(( 200 | 11 ))              
echo $?    # 0    
#...
let "num = (( 200 | 11 ))"
echo $num   # 203
let "num = (( 200 | 11 ))"
echo $?    # 0     
```
```python
#两种test写法
file=/etc/passwd
if [[ -e $file ]]
then
  echo "Password file exists."
fi

decimal=15
octal=017   # = 15 (decimal)
hex=0x0f    # = 15 (decimal)

if [ "$decimal" -eq "$octal" ]
then
  echo "$decimal equals $octal"
else
  echo "$decimal is not equal to $octal" 
fi  

if [[ "$decimal" -eq "$octal" ]]
then
  echo "$decimal equals $octal"            
else
  echo "$decimal is not equal to $octal"
fi      
  

```
```python
#简单表达式写法
var1=20
var2=22
[ "$var1" -ne "$var2" ] && echo "$var1 is not equal to $var2"
home=/home/bozo
[ -d "$home" ] || echo "$home directory does not exist."
```

#### 第三部分 基本之上
#### 第四部分 高级

