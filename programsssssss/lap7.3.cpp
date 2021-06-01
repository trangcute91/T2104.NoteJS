#include<stdio.h>
int main(){
	int mang[10];
	int x,d;
	printf("nhap so x");
	scanf("%d",&x);
	printf("nhap cac gia tri cua mang\n");
	for(int i=0;i<10;i++){
		printf("nhap gia tri phan tu %d =",i);
		scanf("%d",& mang[i]);
		if(mang[i]==x){
			d++;
		}
		
	}if(d!=0){
		printf("x co trong mang");
	}else{
		printf("x khong c0 trong mang");
	}
}
