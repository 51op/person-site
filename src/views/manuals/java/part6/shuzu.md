#数组


### 数组的定义:

* 数组是相同类型数据的有序集合。数组描述的是相同类型的若干个数据，按照一定的先后次序排列组合而成。其中，每一个数据称作一个元素，每个元素可以通过一个索引(下标)来访问它们。数组的三个基本特点：

<font color=#FF00FF>

      1. 长度是确定的。数组一旦被创建，它的大小就是不可以改变的。<br>

      2. 其元素必须是相同类型，不允许出现混合类型。<br>

      3. 数组类型可以是任何数据类型，包括基本类型和引用类型<br>
      
</font>


### 数组声明

``` 
type[]   arr_name; //（推荐使用这种方式）
type    arr_name[];

```


<font color=red>注意事项</font>

      1. 声明的时候并没有实例化任何对象，只有在实例化数组对象时，JVM才分配空间，这时才与长度有关。

      2. 声明一个数组的时候并没有数组真正被创建。

      3. 构造一个数组，必须指定长度。
      
      
      
``` 
public class Test {
    public static void main(String args[]) {
        int[] s = null; // 声明数组；
        s = new int[10]; // 给数组分配空间；
        for (int i = 0; i < 10; i++) {
            s[i] = 2 * i + 1;//给数组元素赋值；
            System.out.println(s[i]);
        } 
    }
}
```

###初始化

数组的初始化方式总共有三种：静态初始化、动态初始化、默认初始化。下面针对这三种方式分别讲解。

1. 静态初始化

      除了用new关键字来产生数组以外，还可以直接在定义数组的同时就为数组元素分配空间并赋值。

静态初始化数组

    int[] a = { 1, 2, 3 };// 静态初始化基本类型数组；
    Man[] mans = { new Man(1, 1), new Man(2, 2) };// 静态初始化引用类型数组；
2.动态初始化

      数组定义与为数组元素分配空间并赋值的操作分开进行。

动态初始化数组

    int[] a1 = new int[2];//动态初始化数组，先分配空间；
    a1[0]=1;//给数组元素赋值；
    a1[1]=2;//给数组元素赋值；
3.数组的默认初始化

   数组是引用类型，它的元素相当于类的实例变量，因此数组一经分配空间，其中的每个元素也被按照实例变量同样的方式被隐式初始化。
   

    int a2[] = new int[2]; // 默认值：0,0
    boolean[] b = new boolean[2]; // 默认值：false,false
    String[] s = new String[2]; // 默认值：null, null


###数组的遍历

    数组元素下标的合法区间：[0, length-1]。我们可以通过下标来遍历数组中的元素，遍历时可以读取元素的值或者修改元素的值
    
 ``` 
 public class Test{
     public static void main(String [] args){
         int[] a = new int[4];//初始化数组元素的个数
         for (int i=0;i<a.length;i++){
             a[i] = 100*i;
 
         }
         for(int i = 0;i<a.length;i++){
             System.out.println(a[i]);
         }
 
 
     }
     
 ```
 
 ####增强for循环
 
 ``` 
 public class Test {
     public static void main(String[] args) {
         String[] ss = { "aa", "bbb", "ccc", "ddd" };
         for (String temp : ss) {
             System.out.println(temp);
         }
     }
 }
 ```
 
 
###java.util.Arrays类

    java.util.Arrays类，包含了常用的数组操作，方便我们日常开发。Arrays类包含了：排序、查找、填充、打印内容等常见的操作

打印数组
```
import java.util.Arrays;
public class Test {
    public static void main(String args[]) {
        int[] a = { 1, 2 };
        System.out.println(a); // 打印数组引用的值；
        System.out.println(Arrays.toString(a)); // 打印数组元素的值；
    }
}
```
数组元素的排序
``` 
import java.util.Arrays;
public class Test {
    public static void main(String args[]) {
        int[] a = {1,2,323,23,543,12,59};
        System.out.println(Arrays.toString(a));
        Arrays.sort(a);
        System.out.println(Arrays.toString(a));
    }
}
```

二分法查找

``` 
import java.util.Arrays;
public class Test {
    public static void main(String[] args) {
        int[] a = {1,2,323,23,543,12,59};
        System.out.println(Arrays.toString(a));
        Arrays.sort(a);   //使用二分法查找，必须先对数组进行排序;
        System.out.println(Arrays.toString(a));
        //返回排序后新的索引位置,若未找到返回负数。
        System.out.println("该元素的索引："+Arrays.binarySearch(a, 12)); 
    }
}
```

数组填充


``` 
import java.util.Arrays;
public class Test {
    public static void main(String[] args) {
        int[] a= {1,2,323,23,543,12,59};
        System.out.println(Arrays.toString(a));
        Arrays.fill(a, 2, 4, 100);  //将2到4索引的元素替换为100;
        System.out.println(Arrays.toString(a));
    }
}
```


##冒泡排序的基础算法

        1. 比较相邻的元素。如果第一个比第二个大，就交换他们两个。
        
        2. 对每一对相邻元素作同样的工作，从开始第一对到结尾的最后一对。在这一点，最后的元素应该会是最大的数。
        
        3. 针对所有的元素重复以上的步骤，除了最后一个。
        
        4. 持续每次对越来越少的元素重复上面的步骤，直到没有任何一对数字需要比较。
    
        
``` 
import java.util.Arrays;
public class Test {
    public static void main(String[] args) {
        int[] values = { 3, 1, 6, 2, 9, 0, 7, 4, 5, 8 };
        bubbleSort(values);
        System.out.println(Arrays.toString(values));
    }
 
    public static void bubbleSort(int[] values) {
        int temp;
        for (int i = 0; i < values.length; i++) {
            for (int j = 0; j < values.length - 1 - i; j++) {
                if (values[j] > values[j + 1]) {
                    temp = values[j];
                    values[j] = values[j + 1];
                    values[j + 1] = temp;
                }
            }
        }
    }
}
```


##冒泡排序的优化算法

``` 
import java.util.Arrays;
public class Test1 {
    public static void main(String[] args) {
        int[] values = { 3, 1, 6, 2, 9, 0, 7, 4, 5, 8 };
        bubbleSort(values);
        System.out.println(Arrays.toString(values));
    }
    public static void bubbleSort(int[] values) {
        int temp;
        int i;
        // 外层循环：n个元素排序，则至多需要n-1趟循环
        for (i = 0; i < values.length - 1; i++) {
            // 定义一个布尔类型的变量，标记数组是否已达到有序状态
            boolean flag = true;
    /*内层循环：每一趟循环都从数列的前两个元素开始进行比较，比较到无序数组的最后*/
            for (int j = 0; j < values.length - 1 - i; j++) {
                // 如果前一个元素大于后一个元素，则交换两元素的值；
                if (values[j] > values[j + 1]) {
                    temp = values[j];
                    values[j] = values[j + 1];
                    values[j + 1] = temp;
                       //本趟发生了交换，表明该数组在本趟处于无序状态，需要继续比较；
                    flag = false;
                }
            }
           //根据标记量的值判断数组是否有序，如果有序，则退出；无序，则继续循环。
            if (flag) {
                break;
            }
        }
    }
}
```