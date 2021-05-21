#include<stdio.h>
int main(){
	int a,b,i,min;
	printf(" nhap so a=");
	scanf("%d",&a);
	printf("nhap so b=");
	scanf("%d",&b);
	if (a<b){
		min=a;
	}else{
		min=b;
	}
	int uc;
	for(i=1;i<=min;i++){
		if(a%i==0 && b%i==0){
			uc=i;
		}
	}printf("uoc chung lon nhat cua 2 so la : %d",uc);
	}
