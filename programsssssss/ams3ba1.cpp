#include<stdio.h>
int main(){
	int s,s1,s2,s3,s4,n1,n2,n3;
	printf("nhap day so can nghich dao:");
	scanf("%d",&s);
	if(s<10){
		printf("nhap so sai");
		
	}else{
	if(s<99){
		s1=s/10;
		n1=s%10;
		s4=(n1*10)+s1;
		printf("so nghich dao =%d",s4);
	}else{
			if(s<999){
	    s1=s/10;//123/12
	    n1=s%10;//123%3
        s2=s1/10;//12/1
	    n2=s1%10;//12%2
	    s4=(n1*100)+(n2*10)+s2;
		printf("so nghich dao =%d",s4);	
     	}else{
     	if(s<9999){
		s1=s/10;// 1234/123
		n1=s%10;//1234%4
		s2=s1/10;//123/12
		n2=s1%10;//123%3
		s3=s2/10;//12/1
		n3=s2%10;//12%2
		s4=(n1*1000)+(n2*100)+(n3*10)+s3;
		printf("so nghich dao =%d",s4);
		}else{
			printf("nhap so sai");
		
		}
}
}
}
}

	
