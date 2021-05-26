#include<stdio.h>
int main(){
	int mang[15];
	int max,d,i,t;
	max=0;
	t=0;
	for(i=0;i<10;i++){
		printf("nhaop vao gia tri cua phan tu %d =",i);
		scanf("%d",&mang[i]);
		 }
		 for(i=0;i<10;i++){
		 	if(mang[i]>0){
		 		d++;
		 		if(d>=2){
		 			t=t+mang[i]+mang[i-1];
		 			if(max<=i){
				 	max=t;
				 }
				 }   
		 }else{
		 	t=0;
		 	d=0;
		 }
}printf("tong chuoi lon nhat =%d",max);
}
		
