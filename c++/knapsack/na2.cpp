#include<iostream>
#include<climits>
#include<algorithm>
using namespace std;

//input
int n, W;
int weight[110], value[110];

//DP table
int dp[110][10010];

int main()
{
	cin >> n >> W;
	for(int i=0; i<n; ++i)
		cin >> value[i] >> weight[i];

	//DP initial condition: dp[0][w]=0
	for(int w=0; w<=W; ++w)
		dp[0][w]=0;

	//DP roop
	for(int i=0; i<n; ++i)
	{
		for(int w=0; w<=W; ++W)
		{
			if(w>=weight[i])
				dp[i+1][w]=max(dp[i][w-weight[i]]+value[i], dp[i][w]);
			else
				dp[i+1][w]=dp[i][w];
		}
	}

	cout << dp[n][W] << endl;
}
