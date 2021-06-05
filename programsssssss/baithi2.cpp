#include<stdio.h>
#include<string.h>
void uppercase(char s[]){
	for(int i=0;i<strlen(s);i++){
		if(s[i]>=97&&s[i]<=122){
			s[i]-=32;
		}
	}printf("sau khi chuyen doi la:%s",s);		
}
int main(){
	char s[30];
	printf("nhap chuoi :");
	fgets(s, sizeof(s), stdin);
	uppercase(s);
}
