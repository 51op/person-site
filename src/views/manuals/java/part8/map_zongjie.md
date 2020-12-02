#遍历集合的方法总结

1、遍历List方法一：普通for循环

        for(int i=0;i<list.size();i++){//list为集合的对象名
            String temp = (String)list.get(i);
            System.out.println(temp);
        }
2、遍历List方法二：增强for循环(使用泛型!)

        for (String temp : list) {
        System.out.println(temp);
        }
3、遍历List方法三：使用Iterator迭代器(1)

    for(Iterator iter= list.iterator();iter.hasNext();){
        String temp = (String)iter.next();
        System.out.println(temp);
    }
4、遍历List方法四：使用Iterator迭代器(2)

    Iterator  iter =list.iterator();
    while(iter.hasNext()){
        Object  obj =  iter.next();
        iter.remove();//如果要遍历时，删除集合中的元素，建议使用这种方式！
        System.out.println(obj);
    }
5、遍历Set方法一：增强for循环

    for(String temp:set){
    System.out.println(temp);
    }
6、遍历Set方法二：使用Iterator迭代器
    
    for(Iterator iter = set.iterator();iter.hasNext();){
        String temp = (String)iter.next();
        System.out.println(temp);
    }
7、遍历Map方法一：根据key获取value

    Map<Integer, Man> maps = new HashMap<Integer, Man>();
    Set<Integer>  keySet =  maps.keySet();
    for(Integer id : keySet){
    System.out.println(maps.get(id).name);
    }
8、遍历Map方法二：使用entrySet

    Set<Entry<Integer, Man>>  ss = maps.entrySet();
    for (Iterator iterator = ss.iterator(); iterator.hasNext();) {
        Entry e = (Entry) iterator.next(); 
        System.out.println(e.getKey()+"--"+e.getValue());
9、类java.util.Collections 提供了对Set、List、Map进行排序、填充、查找元素的辅助方法。

      1. void sort(List) //对List容器内的元素排序，排序的规则是按照升序进行排序。

      2. void shuffle(List) //对List容器内的元素进行随机排列。

      3. void reverse(List) //对List容器内的元素进行逆续排列 。

      4. void fill(List, Object) //用一个特定的对象重写整个List容器。

      5. int binarySearch(List, Object)//对于顺序的List容器，采用折半查找的方法查找特定对象。