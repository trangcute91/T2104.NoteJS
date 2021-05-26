#include<stdio.h>
int main(){
	int mang[15];
	int max,i,d,s;
	printf("nhap gia tri cua mang\n");
	for(i=0;i<15;i++){
		printf("nhap gia ti cua phan tu %d =",i);
		scanf("%d",&mang[i]);
	}for(i=0;i<15;i++){
     if(mang[i]>0){
     	d++;
     	s=d;
     	if(max<s){
     		max=s;
		 }
	 }else{
	 	d=0;
	 }		
	}printf(" chuoi phan tu la so duong la %d",max);
}
