#include<stdio.h>
int main(){
	int n,f1,f2,f3;
	f1=0;
	f2=1;
	f3=1;
	printf("nhap so n=");
	scanf("%d",&n);
	do{
		f1=f2;
	    f2=f3;
	    f3=f1+f2;
	}while(n>f3);
		printf("so tiem can cua n trong day fibonacci la :%d",f2);
	
}
