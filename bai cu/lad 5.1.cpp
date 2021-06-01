#include<stdio.h>
int main(){
	int n,d,i;
	d=0;
	printf("nhap so n ");
	scanf("%d",&n);
	for(i=1;i<=n;i++){
		if(n%i==0){
			d++;
		}
	}if(d==2){
		printf("la so nguyen to");
	}else{
    printf("khong phai so nguyen to");
    }
}
