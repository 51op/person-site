#### 2.1变量

##### 2.1.1. go语言中变量分为局部变量和全局变量

* 局部变量，是定义在打括号{}内部的变量，打括号内部也是局部变量的作用域
* 全局变量，是定义在函数和打括号外部{}的变量

##### 2.1.2. 变量声明
```
格式：
var  变量名 变量类型
```
批量声明未初始化的变量
```
var {
    a int
    b string
    c []float32
    e struct {
        x int
        y string
    }
}
```
初始化变量

```
var a int = 20 #标准声明格式
var b = 30 #自动推断类型格式
c := 40 #初始化声明格式，首选
```

##### 2.1.3.变量多重赋值
以简单算法交换为例，传统写法如下
```
var a int = 10
var b int = 20
b,a = a,b

```
##### 2.1.4.匿名变量

Go语言中的函数可以返回多个值，而事实上并不是所有返回值都用的上，那么就可以用匿名变量 “_” 替换即可，匿名变量不占用命名空间，也不会分配内存

```
func GetData()(int,int){
    return 10,20
}
a,_ := GetData() //舍弃第二个返回值
_,b = GetData()//舍弃第一个返回值
```
#### 2.2 数据类型
#### 2.3 打印格式化
#### 2.4 数据类型转换
Go语言采用数据类型前置加括号的方式进行类型转换,格式如：T(表达式)。T表示要转换的类型

```
a := 10

b := string(a) //将int型转换为string型
c := float32(a) //将int型转换为float型
```

#### 2.5 常量
相对于变量，常量是不变的值。
常量是一个简单的标识符，在程序运行时，不会被修改

```
格式如下：
const   标识符 [类型] = 值
const PAI string = "abc"
```

* ##### 2.5.1 常量用于枚举

```
const (
	USERNAME = "geinihua"
	PASSWORD = "geinihua"
	NETWORK = "tcp"
	SERVER = "10.247.22.146"
	PORT = "3306"
	DATABASE = "demo"
)
	dsn := fmt.Sprintf("%s:%s@%s(%s:%d)/%s",USERNAME,PASSWORD,NETWORK,SERVER,PORT,DATABASE)

```
常量组中如果不指定类型和初始值，则与上一行非空常量值相同

```
const (
    a=10
    b
    c
)

fmt.PrintLn(a,b,c) //输出结果10 10 10 
```
##### 2.5.2 iota枚举

* iota常量自动生成器，每隔一行，自动加1
* iota给常量赋值使用
* iota遇到下个const，会重置为0
* 多个常量可以写一个iota，在一个括号里
* 多重赋值，在同一行，值一样

![3b67aae4c2761561e9cae9acf301af45.png](evernotecid://FD137B74-F047-48AE-B182-0E1701384D4C/appyinxiangcom/23244031/ENResource/p1651)
 
 #### 3. 流程控制
 * 3.1 if 条件判断语句
 ```
 func max(num1, num2 int) int {
	/* 声明局部变量 */
	var result int

	if num1 > num2 {
		result = num1
	} else {
		result = num2
	}
	return result
}

 ```
 * 3.2 switch 条件选择语句
 ```
 
	grade := ""
	score := 88.5

	switch true {
	case score >=90:
		grade = "A"
	case score >=80:
		grade = "B"
	case score >=70:
		grade = "C"
	default:
		grade="E"
	}

	fmt.Printf("你的登记是: %s\n",grade )
 ```
 * 3.3 for 循环语句

```
第一种写法：
for i:=0;i<=20 ;i++  {
		fmt.Printf("%d\n",i)
	}
 第二种写法：
 	var i int
	for i<=20  {
		fmt.Printf("%d\n",i)
	}
   第三种写法(for ...range)：
   str := "123ABCabc好"
	for i,value := range str{
		fmt.Printf("第 %d 位的ASCII值=%d,字符是%c\n",i,value,value)
	}
   
```

 
 #### 4.Go语言的函数与指针
 ##### 4.1 函数
 ```
 func(参数列表)(返回参数列表){
   //函数体
}
```

 ##### 4.1.3 函数变量
 
 > 函数变量是把函数作为值保存到变量中.
在Golang中,,函数也是一种类型,可以和其他类型一样被保存在变量中
 ```
 type myFunc func(int) bool
func main(){

	nums:=[]int{10,20,40,16,17,3030,49849,204394,43943,2923,23923,}
	fmt.Println(filter(nums,isEven))
	fmt.Println(filter(nums,isAdd))
}

func filter(arr []int, f myFunc) []int {
	var result []int
	for _, value := range arr {
		if f(value) {
			result = append(result, value)
		}
	}
	return result
}
func isEven(num int) bool{
	if num%2 == 0 {
		return true
	}else {
		return false
	}
}
func  isAdd(num int) bool{
	if num%2 == 0 {
		return false
	}
	return true
}
 ```
 

##### 4.1.4 匿名函数
> 匿名函数没有函数名，只有函数体，可以作为一种类型赋值给变量。
匿名函数经常被用于实现回调函数、闭包等

```
1.在定义匿名函数的时候就可以直接使用
res1 := func (n1 int, n2 int) int {
        return n1 + n2
    }(10, 30)  //括号里的10,30 就相当于参数列表，分别对应n1和n2
    
    fmt.Println("res1=",res1)
    
2.将匿名函数赋给一个变量
res1 := func (n1 int, n2 int) int {
		return n1 + n2
	}
	res2 := res1(50,50)
	fmt.Println("res1=",res2)
    
3.匿名函数作为回调函数

func vist(list []float64,f func(float64))  {
	for _,value:=range list{
		f(value)
	}
}
	List := []float64{1,2,5,20,90}
	vist(List, func(v float64) {
		sqrt := math.Pow(v,2)
		fmt.Println(sqrt)
	})
    
```
##### 4.1.5 闭包



```
//函数f返回了一个函数，返回的这个函数就是一个闭包。这个函数本身中没有定义变量I的，而是引用了它所在的环境（函数f）中的变量i.
    func f(i int) func() int  {
        return func() int{
            i++
            return i
        }
    }
	a:=f(0)
	fmt.Println(a()) //0
	fmt.Println(a()) //1
	fmt.Println(a()) //2
	fmt.Println(a()) //3

```
##### 4.1.6 可变参数
```
语法格式：
func 函数名(参数名...类型)(返回值列表){}
```
该语法格式定义了一个接受任何数目、任何类型参数的函数。这里特殊语法是三个点"..."，在一个变量后面加上三个点，表示从该处开始接受可变参数
```
func Tsum(nums ...int) {
	fmt.Println(nums)
	total:=0
	for _,val := range nums{
		total+=val
	}
	fmt.Println( total)
}
```

 ##### 4.1.7 golang单元测试

 > 要开始一个单元测试，需要准备一个 go 源码文件，在命名文件时需要让文件必须以_test结尾
    单元测试源码文件可以由多个测试用例组成，每个测试用例函数需要以Test为前缀，例如：



```func TestXXX( t *testing.T )```
```
//参数从1到多个int,Go支持可变参数
func sum2(n1 int, args ...int) int {
	sum := n1
	for i := 0; i < len(args); i++ {
		sum += args[i]
	}
	return sum
}
func TestAvaiableSum(t *testing.T) {
	res := sum2(1, 23, 34, 56)
	fmt.Println("res=", res)
}
```

#### 4.2指针

> 指针式存储另一个变量的内存地址的变量。变量是一种使用方便的占位符。一个指针变量可以指向任何一个值的内存地址
> 在Go语言中使用地址符&来获取变量的地址，一个变量前使用&会返回该变量的内存地址

```
total:=20
fmt.Println("total的内存地址",&total)
```

* ##### 声明指针
```格式：var 指针变量 *指针类型```
声明指针，*T是指针变量的类型，它指向T类型的值，*号用于指定变量是一个指针
```
var ip *int //指向整型的指针
var fp *float32 //指向浮点型的指针
```
> 指针使用流程

1.定义指针变量
2.为指针变量赋值
3.访问指针变量中指向地址的值
获取指针变量指向的变量值：在指针类型的变量前加上*号。如*a

```
type Student struct {
	name string
	age int
	sex int8
}

func TestZhiz(t *testing.T)  {
	s1:=Student{"steven",32,2}
	s2:=Student{"Sunny",10,1}
	var a *Student=&s1 //&s1的内存地址
	var b *Student=&s2 //&s2的内存地址
	fmt.Printf("s1类型为%T，值为%v\n",s1,s1)
	fmt.Printf("s2类型为%T，值为%v\n",s2,s2)
	fmt.Printf("a类型为%T，值为%v\n",a,a)
	fmt.Printf("b类型为%T，值为%v\n",b,b)

	fmt.Printf("s1的值等于a指针\n")
	fmt.Printf("s2的值等于b指针\n")
	fmt.Printf("*a类型为%T，值为%v\n",*a,*a)
	fmt.Printf("*b类型为%T，值为%v\n",*b,*b)

}
```


