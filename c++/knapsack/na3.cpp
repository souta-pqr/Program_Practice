#include<iostream>
#include<cstring>
#include<algorithm>
using namespace std;

//input
int n, A;
int a[110];

//DP table
bool dp[110][10010];

int main()
{
	cin >> n >> A;
	for(int i=0; i<n; ++i)
		cin >> a[i];

	memset(dp, 0, sizeof(dp));
	dp[0][0] = true;

	for(int i=0; i<n; ++i)
	{
		for(int j=0; j<=A; ++j)
		{
			dp[i+1][j] |= dp[i][j];
			if(j >= a[i])
				dp[i][j-a[i]];
		}
	}

	if(dp[n][A])
		cout << "YES" << endl;
	else
		cout << "NO" << endl;
}	
