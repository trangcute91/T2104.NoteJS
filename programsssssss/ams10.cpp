#include<stdio.h>
#include<stdlib.h>
void Nhapmang(int *a,int n){
	for(int i=0;i<n;i++){
		printf("Nhap a[%d]: ",i);
		scanf("%d",&a[i]);
	}
}
void Xuatmang(int *a,int n){
	for(int i=0;i<n;i++){
		printf("%5d",a[i]);
	}
}
int Timmax(int *a,int n){
	int i;
   int max = a[0];
	for(i=1;i<n;i++){
		if(a[i]>max){
			max=a[i];
		}
	}return max;
}
void Sapxep(int *a,int n){
	int tmp;
	for(int i=0;i<n-1;i++){
		for(int j=0;j<n-1-i;j++){
			if(a[j]>a[j+1]){
				tmp=a[j];
				a[j]=a[j+1];
				a[j+1]=tmp;
			}
			
		}
	}
}
void ThemPhanTu(int*& a, int& n, int phantuthem, int vitrithem)
{
    n++;
    a = (int*)realloc(a, n * sizeof(int));
    for(int i = n - 1; i > vitrithem; i--)
    {
        a[i] = a[i - 1];
    }
    a[vitrithem] = phantuthem;
}
int main(){
	int n,max;
	printf("nhap so luong phan tu cua mang: ");
	scanf("%d",&n);
	int *a = (int *)malloc(n* sizeof(int *));
	Nhapmang(a,n);
	printf("\nMang vua nhap la: ");
	Xuatmang(a,n);
    int kq=Timmax(a,n);
	printf("\nSo lon nhat trong mang la: %d\n",kq);
	Sapxep(a,n);
	printf("Sap xep mang tu be den lon: ");
		for(int i=0;i<n;i++){
		printf("%5d",a[i]);
	   }
	int vitrithem,phantuthem;
	do{
		printf("\nNhap vi tri them(0 -> %d):",n);
		scanf("%d",&vitrithem);
		if(vitrithem<0||vitrithem>n){
			printf("\nVi tri them khong hop le");
		}
	}while(vitrithem<0||vitrithem>n);
	printf("Nhap phan tu them: ");
	scanf("%d",&phantuthem);
	ThemPhanTu(a,n,phantuthem,vitrithem);
	printf("Mang sau khi them phan tu %d vao vi tri %d la: ",phantuthem,vitrithem);
	Xuatmang(a,n);
	 kq=Timmax(a,n);
	printf("\nSo lon nhat trong mang la: %d\n",kq);
	Sapxep(a,n);
	printf("Sap xep mang tu be den lon: ");
		for(int i=0;i<n;i++){
		printf("%5d",a[i]);
    }
	free(a);
	return 0;
}

