### 第1章 Go介绍
初试go
```go
package main
import "fmt"
func main()  {
	fmt.Println("hello word")
}
```
### 第2章 Go基本语法
#### 2.1变量

##### 2.1.1. go语言中变量分为局部变量和全局变量

* 局部变量，是定义在打括号{}内部的变量，打括号内部也是局部变量的作用域
* 全局变量，是定义在函数和打括号外部{}的变量

##### 2.1.2. 变量声明
```go
格式：
var  变量名 变量类型
```
批量声明未初始化的变量
```go
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

```go
var a int = 20 #标准声明格式
var b = 30 #自动推断类型格式
c := 40 #初始化声明格式，首选
```

##### 2.1.3.变量多重赋值
以简单算法交换为例，传统写法如下
```go
var a int = 10
var b int = 20
b,a = a,b

```
##### 2.1.4.匿名变量

Go语言中的函数可以返回多个值，而事实上并不是所有返回值都用的上，那么就可以用匿名变量 “_” 替换即可，匿名变量不占用命名空间，也不会分配内存

```go
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

```go
a := 10

b := string(a) //将int型转换为string型
c := float32(a) //将int型转换为float型
```

#### 2.5 常量
相对于变量，常量是不变的值。
常量是一个简单的标识符，在程序运行时，不会被修改

```go
格式如下：
const   标识符 [类型] = 值
const PAI string = "abc"
```

* ##### 2.5.1 常量用于枚举

```go
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

```go
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

![](https://gitee.com/stto_32/img/raw/master/20201130173234.png)
 
 #### 3. 流程控制
 * 3.1 if 条件判断语句
 ```go
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
 ```go
 
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

```go
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
 ```go
 func(参数列表)(返回参数列表){
   //函数体
}
```

 ##### 4.1.3 函数变量
 
 > 函数变量是把函数作为值保存到变量中.
在Golang中,,函数也是一种类型,可以和其他类型一样被保存在变量中
 ```go
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

```go
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



```go
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
```go
语法格式：
func 函数名(参数名...类型)(返回值列表){}
```
该语法格式定义了一个接受任何数目、任何类型参数的函数。这里特殊语法是三个点"..."，在一个变量后面加上三个点，表示从该处开始接受可变参数
```go
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

```go
格式如下：
func TestXXX( t *testing.T )
```

```go
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

```go
total:=20
fmt.Println("total的内存地址",&total)
```

##### 4.2.1 声明指针
```格式：var 指针变量 *指针类型```
声明指针，*T是指针变量的类型，它指向T类型的值，*号用于指定变量是一个指针
```go
var ip *int //指向整型的指针
var fp *float32 //指向浮点型的指针
```
> 指针使用流程

1.定义指针变量
2.为指针变量赋值
3.访问指针变量中指向地址的值
获取指针变量指向的变量值：在指针类型的变量前加上*号。如*a

```go
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
*  空指针
```go
if(ptr != nil) //ptr不是空指针
if(ptr == nil)//ptr是空指针
```

##### 4.2.2 使用指针

1.通过指针修改变量的值

```go
//指针修改变量的值
	a2:=32
	b2:=&a2
	fmt.Println("a2的值",a2) //a2的值 32
	fmt.Println("b2地址",b2) //b2地址 0xc4200142d8
	fmt.Println("b2的值",*b2) //b2的值 32
	*b2++
	fmt.Println("b2的值",*b2) //b2的值 33
    
```
2.使用指针作为函数的参数

将基本数据类型的指针作为函数的参数，可以实现对传入数据的修改，这是因为指针作为函数的参数只是赋值了一个指针，指针指向的内存没有发生改变
```go
func main(){
orgi:=68
		ptr:=&orgi
		change(ptr)
		fmt.Println("执行函数后orgi的值",orgi) //执行函数后orgi的值 20
}
func change(p *int)  {
	*p=20
}

```

##### 4.2.3 指针数组

```go
//指针数组
//格式：var ptr [3]*string

ptrArr:=[COUNT]string{"abc","ABC","123","8888"}

i:=0
//定义指针数组
var ptrPoint [COUNT]*string
fmt.Printf("%T,%v \n",ptrPoint,ptrPoint) //[4]*string,[<nil> <nil> <nil> <nil>]

//将数组中的每个元素地址赋值给指针数组
	for i=0;i<COUNT;i++ {
		ptrPoint[i] = &ptrArr[i]
	}

	fmt.Printf("%T,%v \n",ptrPoint,ptrPoint) //[4]*string,[0xc42000e800 0xc42000e810 0xc42000e820 0xc42000e830]

	//循环取指针数组中的值
	for i=0;i<COUNT;i++ {
		fmt.Printf("a[%d]=%v \n",i, *ptrPoint[i])
		//a[0]=abc 
		//a[1]=ABC 
		//a[2]=123 
		//a[3]=8888 
	}
```
#### 4.2.4 指针的指针

指向指针的指针变量声明格式如下：
```go
var ptr **int//使用两个*号
```
```go

//指针的指针
var a2 int
var ptr2 *int
var pptr **int
a2=1234
ptr2=&a2
fmt.Println("ptr地址",ptr2)
pptr=&ptr
fmt.Println("pptr地址",pptr)

fmt.Printf("变量a2=%d\n",a2)
fmt.Printf("指针变量ptr2=%d\n",*ptr2)
fmt.Printf("指向指针的指针量pptr=%d\n",**pptr)
//输出结果
/*
ptr地址 0xc4200d4140
pptr地址 0xc4200ec000
变量a2=1234
指针变量ptr2=1234
指向指针的指针量pptr=20
*/
```


#### 4.3 函数的参数传递
##### 4.3.1  值传递(传值)
    值传递是指在调用函数时将实际参数复制一份传递到函数中，不会影响原内容数据
##### 4.3.2  引用传递(传引用)
    1.引用传递是在调用函数时将实际参数的地址传递到函数中，那么在函数中对参数所进行的修改将影响原内容数据
    2.Go中可以借助指针来实现引用传递。函数参数使用指针参数，传参的时候其实是复制一份指针参数，也就是复制了一份变量地址
    3.函数的参数如果是指针，当调用函数时，虽然参数是按复制传递的，但此时仅仅只是复制一个指针，也就是一个内存地址，这样不会造成内存浪费、时间开销
  

函数传int类型的值与引用对比
 ```go
 package main
 
 import "fmt"
 
 func main()  {
 
 	//函数传int类型的值与引用对比
 	a:=200
 	fmt.Printf("变量a的内存地址%p,值为：%v\n",&a,a)
 	changeIntVal(a)
 	fmt.Printf("changeIntVal函数调用后变量a的内存地址%p,值为：%v\n",&a,a)
 	changeIntPtr(&a)
 	fmt.Printf("changeIntPtr函数调用后变量a的内存地址%p,值为：%v\n",&a,a)
 	/*
 	变量a的内存地址0xc420080008,值为：200
 	changeIntVal函数，传递的参数n的内存地址：0xc420080018，值为：200
 	changeIntVal函数调用后变量a的内存地址0xc420080008,值为：200
 	changeIntPtr函数，传递的参数n的内存地址：0xc42008a020，值为：0xc420080008
 	changeIntPtr函数调用后变量a的内存地址0xc420080008,值为：50
 	*/
 }
 func changeIntVal(n int)  {
 	fmt.Printf("changeIntVal函数，传递的参数n的内存地址：%p，值为：%v\n",&n,n)
 	n=90
 }
 func changeIntPtr(n *int)  {
 	fmt.Printf("changeIntPtr函数，传递的参数n的内存地址：%p，值为：%v\n",&n,n)
 	*n=50
 }
 ```
 函数传slice类型的值与引用对比
 ```go
import "fmt"
func main()  {
	//函数传slice类型的值与引用对比
	a:=[]int{1,2,3,4}
	fmt.Printf("变量a的内存地址%p,值为：%v\n",&a,a)
	changeSliceVal(a)
	fmt.Printf("changeSliceVal函数调用后变量a的内存地址%p,值为：%v\n",&a,a)
	changeSlicePtr(&a)
	fmt.Printf("changeSlicePtr函数调用后变量a的内存地址%p,值为：%v\n",&a,a)
}
func changeSliceVal(n []int)  {
	fmt.Printf("changeSliceVal函数，传递的参数n的内存地址：%p，值为：%v\n",&n,n)
	n[0]=90
}
func changeSlicePtr(n *[]int)  {
	fmt.Printf("changeSlicePtr函数，传递的参数n的内存地址：%p，值为：%v\n",&n,n)
	(*n)[1]=50
}
```
 ![](https://gitee.com/stto_32/img/raw/master/20201130153318.png)
 
 函数传结构体
 ```go
package main
import "fmt"
type  Teater struct {
	name string
	age int
}
func main()  {
	//函数传结构体
	a:=Teater{"xll",200}
	fmt.Printf("变量a的内存地址%p,值为：%v\n",&a,a)
	changeStructVal(a)
	fmt.Printf("changeStructVal函数调用后变量a的内存地址%p,值为：%v\n",&a,a)
	changeStructPtr(&a)
	fmt.Printf("changeStructPtr函数调用后变量a的内存地址%p,值为：%v\n",&a,a)
}
func changeStructVal(n Teater)  {
	fmt.Printf("changeStructVal函数，传递的参数n的内存地址：%p，值为：%v\n",&n,n)
	n.name="testtest"
}
func changeStructPtr(n *Teater)  {
	fmt.Printf("changeStructPtr函数，传递的参数n的内存地址：%p，值为：%v \n",&n,n)
	(*n).name="ptrptr"
	(*n).age=899
}
```
 ![](https://gitee.com/stto_32/img/raw/master/20201130161213.png)
 
 
### 第5章 Go语言的内置容器

#### 5.1 数组
* 数组语法
```go
格式如下：
var 变量名 [数组长度]数据类型
```
1.数组长度必须是整数且大于0，未初始化的数组不是nil，也就是说没有空数组(与切片不同)
2.初始化数组格式如下:
```go
var arr = [6]int{1,2,3,4,5,6}
```
初始化数组中{}中的元素个数不能大于[]中的数字
如果忽略[]的数字，不设置数组长度，Go默认会设置数组的长度。可以忽略声明中数组的长度并将其替换为"..."。编译器会自动计算长度，格式如下
```go
var arr = [...]int{1,2,3,4,5,6}
```
3.修改数组内容，可用格式
```go
arr[2[=100
```
数组元素可以通过索引位置来读取,所以从0开始
4.通过函数len()获取数组长度
```go
var arr = [...]int{1,2,3,4,5,6}
fmt.Printf("数组长度%d \n",len(arr))
```

* 数组遍历
```go
arr:=[...]int{1,2,3,4,5,6}
//第一种遍历方式
for i:=0;i<len(arr);i++ {
	fmt.Printf("元素值%v\n",arr[i])
}
fmt.Println("------")
//第二种遍历方式
for index,value:=range arr{
	fmt.Printf("第 %d个元素值%v\n",index,value)
	}
```
* 多维数组
二维数声明格式如下:
```go
var arrName [x][y]数据类型
```
二维数组可以使用循环嵌套获取元素
```go

func main()  {
	arr:=[5][2]int{
		{0,0},
		{1,2},
		{2,4},
		{3,6},
		{4,8},
	}
	for i1,v:=range arr{
		for i2,v2:=range v {
			fmt.Printf("arr[%d][%d]=%d\n",i1,i2,v2)
		}
	}

}
```

* 数组是值类型
> Go中数组并非引用类型，而是值类型。当被分配给一个新变量时，会将原始数组复制出一份给新变量，因此对新变量进行更改，原始数组不会有影响

#### 5.2 切片
* 切片概念
  1.Go中提供了一种内置类型"切片"，弥补了数组长度不变的缺陷。
  2.切片是可变长度序列,序列中每个元素都是相同类型
  3.从底层看，切片引用了数组对象。切片可以追加元素，追加元素时容量增大，与数组相比切片不需要设定长度
  4.切片数据结构可以理解为一个结构体，包含三个要素。
     指针，指向数组中切片指定的开始位置
     长度，即切片长度
     容量，也就是**切片开始位置**到数组最后位置的长度

* 切片语法
1.声明切片
```go
var identifier []type
切片不需要说明长度，该切片默认为nil，长度为0
```
使用make()函数创建切片，格式如下：
```go
var sliceVar []type = make([]type,len,cap)
简写：sliceVar:=make([]type,len,cap)//cap容量

sliceVar:=make([]int,3,5)
fmt.Printf("len=%d cap=%d slice=%v\n",len(sliceVar),cap(sliceVar),sliceVar) //len=3 cap=5 slice=[0 0 0]
```
2.初始化切片
(1)直接初始化切片
 ```go
 sl:=[]int{1,2,3,4}
```
(2)通过数组截取来初始化切片
```go
arr:=[...]int{1,2,3,4,5}
s1:=arr[:]
```
切片中包含数组中所有元素
```go 
s:=arr[startIndex:endIndex] 
```
将arr中从下标startIndex到endIndex-1下的元素创建为一个新的切片(前闭后开)，长度是endIndex-startIndex
缺省endIndex时表示一直到arr的最后一个元素
```go 
s:=arr[startIndex:endIndex]
```
缺省startIndex时表示从arr的第一个元素开始
```go
s:=arr[startIndex:endIndex]
```

```go
func main()  {
	arr:=[]int{0,1,2,3,4,5,6,7,8}
	printSlice(arr[:6]) //0 1 2 3 4 5 不包含6元素
	printSlice(arr[3:]) //3 4 5 6 7 8  从索引3开始到末尾
	printSlice(arr[2:5]) //2 3 4  从索引2开始(包含)到索引5(不包含)结束
}
func printSlice(n []int)  {
	fmt.Printf("len=%d cap=%d slice=%v\n",len(n),cap(n),n)
}
```
(3) **深入理解切片的容量，我们可以把容量当做成总长度减去左指针走过的元素值，比如** 
```go
s[:0] ——> cap = 6 - 0 =6；

s[2:] ——> cap = 6 - 2 = 4。
```
* append()和copy()函数

由此可知，容量随着底层数组长度的变化而不断变化，如果底层数组长度为4，在添加了一个元素后变成5，则容量变为 4*2=8，如果len=12，cap=12，如果追加一个元素后，那么新的cap=2*7=14。




* 切片是引用类型
  切片没有自己的任何数据，它仅是底层数组的一个引用，对切片的任何修改都将影响底层数组的数据，数组是值类型，切片是引用类型
* **切片的源代码学习**
可参考博客 https://www.cnblogs.com/xull0651/p/14067809.html
```go
func growslice(et *_type, old slice, cap int) slice {
	
	newcap := old.cap
	doublecap := newcap + newcap
	if cap > doublecap {
		newcap = cap
	} else {
		if old.len < 1024 {
			newcap = doublecap
		} else {
			// Check 0 < newcap to detect overflow
			// and prevent an infinite loop.
			for 0 < newcap && newcap < cap {
				newcap += newcap / 4
			}
			// Set newcap to the requested cap when
			// the newcap calculation overflowed.
			if newcap <= 0 {
				newcap = cap
			}
		}
	}
	return slice{p, old.len, newcap}
}

从上面的源码，在对 slice 进行 append 等操作时，可能会造成 slice 的自动扩容。其扩容时的大小增长规则是：
a.如果切片的容量小于 1024，则扩容时其容量大小乘以2；一旦容量大小超过 1024，则增长因子变成 1.25，即每次增加原来容量的四分之一。
b.如果扩容之后，还没有触及原数组的容量，则切片中的指针指向的还是原数组，如果扩容后超过了原数组的容量，则开辟一块新的内存，把原来的值拷贝过来，这种情况丝毫不会影响到原数组。

```
![](https://gitee.com/stto_32/img/raw/master/20201201145013.png)
#### 5.3 map
* 5.3.1 map概念
Map 是一种无序的键值对的集合。Map 最重要的一点是通过 key 来快速检索数据，key 类似于索引，指向数据的值。
Map 是一种集合，所以我们可以像迭代数组和切片那样迭代它。不过，Map 是无序的，我们无法决定它的返回顺序，这是因为 Map 是使用 hash 表来实现的
Map是hash表的一个引用，类型写为：map[key]value，其中的key, value分别对应一种数据类型，如：map[string]string
要求所有的key的数据类型相同，所有value数据类型相同(注：key与value可以有不同的数据类型)
* 5.3.2 map语法
声明map
```go
第一种方法
mapVar := map[key类型]value类型
第二种方法
mapVar := make(map[key类型]value类型)
```
map初始化和遍历
```go
	mapVar:=map[string]string{
		"a":"t1",
		"b":"t2",
		"c":"t3",
	}
	//遍历map
	for key, value := range mapVar {
		fmt.Printf("key=%v value=%v\n",key,value)
	}

	//查看元素在集合中是否存在
	if value,ok:=mapVar["aa"];ok {
		fmt.Println("存在value",value)
	}else {
		fmt.Println("不存在value")

	}

```
* 5.3.3 map是引用类型

### 第6章  Go常用内置包

[可参考官网](https://golang.org/pkg/)
* 字符串遍历
 ```go
str:="strings包：遍历带有中文的字符串"
	for _, value := range []rune(str) {
		fmt.Printf("%c\n",value)
	}
```

### 第7 章Go面向对象

#### 结构体

* 匿名结构体 和结构体匿名字段
匿名结构体就是没有名字的结构体，无须通过type关键字定义就可以直接使用。创建匿名结构体的时候，同时也要创建结构体对象
```go
	//匿名结构体
	addr:=struct{
		name string
		age int
	}{"slaiven",39}
	fmt.Println(addr)
```
**匿名字段就是在结构体中的字段没有名字，只包含一个没有字段名的类型**
**如果字段没有名字，那么默认使用类型作为字段名，同一类型只能有一个匿名字段**

```go
//匿名字段
	user:=new(User)
	user.string="apce"
	user.int=84
	fmt.Printf("名字%v,年龄%v",user.string,user.int) //名字apce,年龄84
```
* 结构体嵌套
将一个结构当作另一结构体的字段(属性),这种就是结构体嵌套，可以模拟以下两种关系.
**聚合关系：一个类作为另一个类的属性，一定要采用有名字的结构体作为字段** 
**继承关系:一个类作为另一个类的子类。子类与父类的关系。采用匿名字段的形式，匿名字段就该结构体的父类**
```go
//聚合关系：一个类作为另一个类的属性
type Address struct {
	province,city string
}
type Person struct {
	name string
	age int
	address  *Address
}

func TestMoudelStrings(t *testing.T)  {
	//实例化Address结构体
	addr:=Address{}
	addr.province="北京市"
	addr.city="丰台区"
	//实例化Person结构体
	p:=Person{}
	p.name="Strven"
	p.age=28
	p.address=&addr
	fmt.Println("姓名：",p.name,"年龄：",p.age,"省：",p.address.province,"市：",p.address.city)
	//如果修改了Person对象的address数据，那么对Address对象会有影响么？肯定的
	p.address.city="大兴区"
	fmt.Println("姓名：",p.name,"年龄：",p.age,"省：",p.address.province,"市：",addr.city)
	//修改Address对象，是否会影响Persion对象数据？肯定的
	addr.city="朝阳区"
	fmt.Println("姓名：",p.name,"年龄：",p.age,"省：",p.address.province,"市：",addr.city)
}
//继承关系:一个类作为另一个类的子类。子类与父类的关系

type Address struct {
	province,city string
}
type Person struct {
	name string
	age int
	Address //匿名字段，Address是Person的父类
}
func TestMoudelStrings(t *testing.T)  {
	//实例化Address结构体
	addr:=Address{}
	addr.province="北京"
	addr.city="丰台区"
	//实例化Person结构体
	p:=Person{"strven",38,addr}
	fmt.Printf("姓名:%v  年龄:%v 省:%v 市:%v\n",p.name,p.age,p.Address.province,p.Address.city) //姓名:strven  年龄:38 省:北京 市:丰台区
}
```

#### 方法

* Go中同时有函数和方法，方法的本质是函数，但是与函数又不同
1.含义不同，函数是一段具有独立功能的代码，可以被反复多次调用，而方法是一个类的行为功能，只有该类的对象才能调用
2.方法有接受者而函数没有，Go语言的方法是一种作用域特定类型变量的函数，这种类型变量叫作接受者(receiver)，接受者的概念类似于传统面向对象中的this或self关键字
3.方法可以重名(接受者不同)，而函数不能重名，
```go
type Per struct {
	name string
	age int
}
func ( p  Per ) getData()  {
	fmt.Printf("名字：%v 年龄：%v",p.name,p.age) //名字：aaa 年龄：39
}
func TestMethod(t *testing.T)  {
	p1:=Per{"aaa",39}
	p1.getData()
}
```

* 方法继承
方法是可以继承的，如果匿名字段实现了一个方法，那么包含这个匿名字段的struct也能调用该匿名字段中的方法
```go
type Human struct {
	name, phone string
	age int
}

type Stu struct {
	Human
	school string
}
type Employee struct {
	Human
	company string
}
func TestMethod(t *testing.T)  {
	s1:=Stu{Human{"dav","1850103930",7}," 洛阳一中"}
	s1.SayHi()
}
func (h *Human) SayHi()  {
	fmt.Printf("我是%s,%d岁，电话%s\n",h.name,h.age,h.phone)
}
```
* 方法重写
```go
type Human struct {
	name, phone string
	age int
}

type Stu struct {
	Human
	school string
}
type Employee struct {
	Human
	company string
}
func TestMethod(t *testing.T)  {
	s1:=Stu{Human{"dav","1850103930",7}, " 洛阳一中"}
	s2:=Employee{Human{"dav","1850*****",17},"航天飞机"}
	s1.SayHi()
	
	s2.SayHi()
}
func (h *Human) SayHi()  {
	fmt.Printf("我是%s,%d岁，电话%s\n",h.name,h.age,h.phone)
}
func (h *Stu) SayHi()  {
	fmt.Printf("我是%s,%d岁，电话%s,学校%s\n",h.name,h.age,h.phone,h.school)
}
func (h *Employee) SayHi()  {
	fmt.Printf("我是%s,%d岁，电话%s,工作%s\n",h.name,h.age,h.phone,h.company)
}
```
![](https://gitee.com/stto_32/img/raw/master/20201202151315.png)

#### 接口


* 接口定义与实现
Go当中的接口和java中接口类似，接口中定义对象的行为。接口指定对象应该做什么，实现这种行为方式(实现细节)由对象来决定
```go
type implUser interface {
	run()
	call()
}
type Ameriacan struct {

}
func (a Ameriacan) run()  {
	fmt.Printf("美国人跑了\n")
}
func (a Ameriacan) call()  {
	fmt.Printf("美国人call()方法" +
		"\n")
}
func TestOver(t *testing.T)  {

	var user implUser
	user=new(Ameriacan)
	user.run()
	user.call()
}
```

* 接口对象转型(类型断言)
类似于java中的向上转型和向下转型
```go
//接口对象转型（类型断言）
type Compute interface {
	perimeter() float64 //实现2个类型
}
type Rectangle struct {
	a,b float64
}
type Triangle struct {
	a,b,c float64
}

//定义2个类型的方法，
func (r Rectangle)perimeter()  float64 {

	return r.a*r.b
}
func (r Triangle)perimeter()  float64 {

	return r.a*r.b*r.c
}

//接口断言
func getType(c Compute)  {
	if instance,ok:=c.(Rectangle);ok{
		fmt.Printf("矩形长度:%0.2f,%0.2f\n",instance.a,instance.b)

	} else if instance,ok:=c.(Triangle);ok {
		   fmt.Printf("三角形形长度:%0.2f,%0.2f,%0.2f\n",instance.a,instance.b,instance.c)
	}
}
//定义返回结果，
func getResult(s Compute)  {

	fmt.Printf("结果是%.2f \n",s.perimeter())
}
func main()  {

	var c Compute
	c = Rectangle{2.0,3.0}
	getType(c)
	getResult(c)
}

```