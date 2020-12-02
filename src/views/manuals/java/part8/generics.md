
#泛型Generics


    泛型的本质就是“数据类型的参数化”。 我们可以把“泛型”理解为数据类型的一个占位符(形式参数)，即告诉编译器，在调用泛型时必须传入实际类型

#自定义泛型


我们可以在类的声明处增加泛型列表，如：<T,E,V>,此处，字符可以是任何标识符，一般采用这3个字母。

泛型类的声明

 ```     
public class Genrices {

    public  static void main(String[] args){
        MyCollection<String> myCollection = new MyCollection<String>();
        myCollection.set("aaa",0);
        myCollection.set("bbb",2);
        String str = myCollection.get(0);
        System.out.println(str);
    }

}

class MyCollection<E> {// E:表示泛型;
    Object[] objs = new Object[5];

    public E get(int index) {// E:表示泛型;
        return (E) objs[index];
    }
    public void set(E e, int index) {// E:表示泛型;
        objs[index] = e;
    }
}   

```  

#容器中使用泛型

``` 
public class Test {
    public static void main(String[] args) {
        // 以下代码中List、Set、Map、Iterator都是与容器相关的接口;
        List<String> list = new ArrayList<String>();
        Set<Man> mans = new HashSet<Man>();
        Map<Integer, Man> maps = new HashMap<Integer, Man>();
        Iterator<Man> iterator = mans.iterator();
    }
}
```


