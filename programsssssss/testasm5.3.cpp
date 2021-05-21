#include<stdio.h>
int main(){
	int a,b,i;
	printf(" nhap so a=");
	scanf("%d",&a);
	printf("nhap so b=");
	scanf("%d",&b);
	int uc;
	if (a<b){
			for(i=1;i<=a;i++){
		if(a%i==0 && b%i==0){
			uc=i;
		}
	}printf("uoc chung lon nhat cua 2 so la : %d",uc);
	}else{
	for(i=1;i<=b;i++){
		if(a%i==0 && b%i==0){
			uc=i;
		}
	}printf("uoc chung lon nhat cua 2 so la : %d",uc);
		
	}

	}
