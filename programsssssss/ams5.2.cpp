#include<stdio.h>
int main(){
	int a,x,n;
	a=0;
	printf("nhap so n=");
	scanf("%d",&n);
	if(n<=1){
		printf("nhap lai so");
	
	}else{
	for(x=1;x<=n;x++){
	if(n%x==0){
		printf(" uoc cua n la %d \n",x);
		a=a+x;
	}	
}printf("tong cua cac uoc la %d",a);
}
}

