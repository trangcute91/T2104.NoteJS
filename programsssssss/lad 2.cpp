#include<stdio.h>
int main(){
	int mang[10];
	int tbc,tbc2,i,d;
	for(i=0;i<10;i++){
		scanf("%d",& mang[i]);
		if(i%2==0&&mang[i]%2!=0){
			tbc=tbc+mang[i];
			d++;
		}
	}tbc2=tbc/d;
	printf("trung binh cong cua cac so le trong vi tri chan la %d",tbc2);
}
