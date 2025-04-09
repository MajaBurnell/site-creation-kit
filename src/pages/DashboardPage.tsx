
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Battery,
  BatteryMedium,
  BatteryFull,
  Zap,
  BarChart3,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  LineChart,
  PieChart,
  LayoutGrid,
  AlertCircle
} from "lucide-react";
import {
  LineChart as RechartsLineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
  BarChart as RechartsBarChart,
  Bar,
  Legend
} from "recharts";

// Mock data
const energyData = [
  { name: "00:00", solar: 0, grid: 40, consumption: 30, battery: 10 },
  { name: "04:00", solar: 0, grid: 35, consumption: 25, battery: 10 },
  { name: "08:00", solar: 60, grid: 10, consumption: 45, battery: 25 },
  { name: "12:00", solar: 90, grid: 0, consumption: 60, battery: 30 },
  { name: "16:00", solar: 50, grid: 20, consumption: 65, battery: 5 },
  { name: "20:00", solar: 0, grid: 45, consumption: 40, battery: 5 },
];

const weeklyData = [
  { name: "Mon", solar: 240, grid: 180, consumption: 320, battery: 100 },
  { name: "Tue", solar: 280, grid: 150, consumption: 340, battery: 90 },
  { name: "Wed", solar: 190, grid: 200, consumption: 290, battery: 100 },
  { name: "Thu", solar: 310, grid: 120, consumption: 350, battery: 80 },
  { name: "Fri", solar: 270, grid: 160, consumption: 330, battery: 100 },
  { name: "Sat", solar: 330, grid: 90, consumption: 310, battery: 110 },
  { name: "Sun", solar: 290, grid: 120, consumption: 280, battery: 130 },
];

const monthlyData = [
  { name: "Jan", solar: 2200, grid: 1800, consumption: 3500, battery: 500 },
  { name: "Feb", solar: 2400, grid: 1600, consumption: 3300, battery: 700 },
  { name: "Mar", solar: 3100, grid: 1200, consumption: 3700, battery: 600 },
  { name: "Apr", solar: 3600, grid: 900, consumption: 3800, battery: 700 },
  { name: "May", solar: 3800, grid: 800, consumption: 4000, battery: 600 },
  { name: "Jun", solar: 4200, grid: 600, consumption: 4100, battery: 700 },
];

const energyMixData = [
  { name: "Solar", value: 55 },
  { name: "Grid", value: 25 },
  { name: "Battery", value: 20 },
];

const COLORS = ['#00cc1d', '#0280c8', '#FFC107'];

// Battery metrics
const batteryMetrics = {
  status: "Healthy",
  chargeLevel: 68,
  cycles: 127,
  temperature: "24°C",
  capacity: "95%",
  estimatedRuntime: "8.5 hrs",
  dailyDischarge: "42 kWh"
};

const alerts = [
  { type: "info", message: "Scheduled maintenance: July 15, 2023" },
  { type: "warning", message: "Grid instability detected at 14:30" },
  { type: "success", message: "Battery system operating at optimal efficiency" },
];

const DashboardPage = () => {
  const [timeRange, setTimeRange] = useState("day");
  
  const renderActiveData = () => {
    switch(timeRange) {
      case 'week':
        return weeklyData;
      case 'month':
        return monthlyData;
      default:
        return energyData;
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Energy Dashboard</h1>
              <p className="text-gray-600">Monitor and analyze your BESS performance in real-time</p>
            </div>
            
            <div className="flex items-center gap-3">
              <span className="text-gray-600">Last updated: 5 mins ago</span>
              <button className="flex items-center gap-1 bg-bessify-green-50 hover:bg-bessify-green-100 text-bessify-green-700 px-3 py-1.5 rounded-md text-sm">
                <Zap className="w-4 h-4" /> Live View
              </button>
              <button className="flex items-center gap-1 bg-gray-50 hover:bg-gray-100 px-3 py-1.5 rounded-md text-sm">
                <Calendar className="w-4 h-4" /> Export
              </button>
            </div>
          </div>
          
          {/* Overview Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Current Production</p>
                  <h3 className="text-2xl font-bold">12.8 kW</h3>
                  <div className="flex items-center mt-1 text-bessify-green-600">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-xs">+8.2% from yesterday</span>
                  </div>
                </div>
                <div className="bg-bessify-green-100 p-2 rounded-lg">
                  <Zap className="h-6 w-6 text-bessify-green-600" />
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Battery Status</p>
                  <h3 className="text-2xl font-bold">{batteryMetrics.chargeLevel}%</h3>
                  <div className="flex items-center mt-1 text-bessify-green-600">
                    <span className="text-xs">{batteryMetrics.status}</span>
                  </div>
                </div>
                <div className="bg-bessify-blue-100 p-2 rounded-lg">
                  <BatteryMedium className="h-6 w-6 text-bessify-blue-600" />
                </div>
              </div>
              <div className="mt-4 bg-gray-100 h-2 rounded-full">
                <div 
                  className="bg-gradient-to-r from-bessify-green-500 to-bessify-blue-500 h-2 rounded-full" 
                  style={{ width: `${batteryMetrics.chargeLevel}%` }}
                ></div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Grid Consumption</p>
                  <h3 className="text-2xl font-bold">4.2 kW</h3>
                  <div className="flex items-center mt-1 text-bessify-green-600">
                    <ArrowDownRight className="h-4 w-4 mr-1" />
                    <span className="text-xs">-12.5% from yesterday</span>
                  </div>
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <LineChart className="h-6 w-6 text-gray-600" />
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Savings This Month</p>
                  <h3 className="text-2xl font-bold">$342.18</h3>
                  <div className="flex items-center mt-1 text-bessify-green-600">
                    <ArrowUpRight className="h-4 w-4 mr-1" />
                    <span className="text-xs">+18.3% from last month</span>
                  </div>
                </div>
                <div className="bg-bessify-green-100 p-2 rounded-lg">
                  <PieChart className="h-6 w-6 text-bessify-green-600" />
                </div>
              </div>
            </Card>
          </div>
          
          {/* Charts */}
          <Tabs defaultValue="energy" className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <TabsList>
                <TabsTrigger value="energy" className="data-[state=active]:bg-bessify-green-100 data-[state=active]:text-bessify-green-800">
                  <LineChart className="h-4 w-4 mr-2" /> Energy Flow
                </TabsTrigger>
                <TabsTrigger value="battery" className="data-[state=active]:bg-bessify-green-100 data-[state=active]:text-bessify-green-800">
                  <Battery className="h-4 w-4 mr-2" /> Battery Performance
                </TabsTrigger>
                <TabsTrigger value="savings" className="data-[state=active]:bg-bessify-green-100 data-[state=active]:text-bessify-green-800">
                  <BarChart3 className="h-4 w-4 mr-2" /> Cost & Savings
                </TabsTrigger>
              </TabsList>
              
              <div className="flex bg-gray-100 rounded-md">
                <button 
                  className={`px-3 py-1 text-sm ${timeRange === 'day' ? 'bg-bessify-green-600 text-white rounded-md' : ''}`}
                  onClick={() => setTimeRange('day')}
                >
                  Day
                </button>
                <button 
                  className={`px-3 py-1 text-sm ${timeRange === 'week' ? 'bg-bessify-green-600 text-white rounded-md' : ''}`}
                  onClick={() => setTimeRange('week')}
                >
                  Week
                </button>
                <button 
                  className={`px-3 py-1 text-sm ${timeRange === 'month' ? 'bg-bessify-green-600 text-white rounded-md' : ''}`}
                  onClick={() => setTimeRange('month')}
                >
                  Month
                </button>
              </div>
            </div>
            
            <TabsContent value="energy" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="p-6 lg:col-span-2">
                  <h4 className="text-lg font-medium mb-4">Energy Flow ({timeRange})</h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsLineChart
                        data={renderActiveData()}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="solar" stroke="#00cc1d" strokeWidth={2} />
                        <Line type="monotone" dataKey="grid" stroke="#0280c8" strokeWidth={2} />
                        <Line type="monotone" dataKey="consumption" stroke="#ff7300" strokeWidth={2} />
                        <Line type="monotone" dataKey="battery" stroke="#FFC107" strokeWidth={2} />
                      </RechartsLineChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-lg font-medium mb-4">Energy Mix</h4>
                  <div className="h-64 flex items-center justify-center">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsPieChart>
                        <Pie
                          data={energyMixData}
                          cx="50%"
                          cy="50%"
                          labelLine={false}
                          label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                        >
                          {energyMixData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </RechartsPieChart>
                    </ResponsiveContainer>
                  </div>
                  <div className="mt-4 grid grid-cols-3 gap-2 text-center">
                    <div className="p-2 bg-bessify-green-50 rounded-md">
                      <div className="text-bessify-green-600 font-semibold">Solar</div>
                      <div className="text-sm">55%</div>
                    </div>
                    <div className="p-2 bg-bessify-blue-50 rounded-md">
                      <div className="text-bessify-blue-600 font-semibold">Grid</div>
                      <div className="text-sm">25%</div>
                    </div>
                    <div className="p-2 bg-amber-50 rounded-md">
                      <div className="text-amber-600 font-semibold">Battery</div>
                      <div className="text-sm">20%</div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="battery" className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="p-6">
                  <h4 className="text-lg font-medium mb-4">Battery Health</h4>
                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Capacity Health</span>
                        <span className="text-sm font-medium">{batteryMetrics.capacity}</span>
                      </div>
                      <div className="h-2 bg-gray-100 rounded-full">
                        <div className="h-2 bg-bessify-green-600 rounded-full" style={{ width: batteryMetrics.capacity }}></div>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-sm text-gray-600 mb-1">Charge Cycles</div>
                        <div className="font-semibold">{batteryMetrics.cycles}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-sm text-gray-600 mb-1">Temperature</div>
                        <div className="font-semibold">{batteryMetrics.temperature}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-sm text-gray-600 mb-1">Est. Runtime</div>
                        <div className="font-semibold">{batteryMetrics.estimatedRuntime}</div>
                      </div>
                      <div className="bg-gray-50 p-3 rounded-md">
                        <div className="text-sm text-gray-600 mb-1">Daily Discharge</div>
                        <div className="font-semibold">{batteryMetrics.dailyDischarge}</div>
                      </div>
                    </div>
                  </div>
                </Card>
                
                <Card className="p-6 md:col-span-2">
                  <h4 className="text-lg font-medium mb-4">Battery Performance ({timeRange})</h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={renderActiveData()}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar name="Charge" dataKey="solar" fill="#00cc1d" />
                        <Bar name="Discharge" dataKey="battery" fill="#FFC107" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="savings" className="mt-0">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="p-6 lg:col-span-2">
                  <h4 className="text-lg font-medium mb-4">Cost Comparison ({timeRange})</h4>
                  <div className="h-80">
                    <ResponsiveContainer width="100%" height="100%">
                      <RechartsBarChart
                        data={renderActiveData()}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar name="Without BESS" dataKey="consumption" fill="#ff7300" />
                        <Bar name="With BESS" dataKey="grid" fill="#0280c8" />
                      </RechartsBarChart>
                    </ResponsiveContainer>
                  </div>
                </Card>
                
                <Card className="p-6">
                  <h4 className="text-lg font-medium mb-4">Savings Summary</h4>
                  <div className="space-y-6">
                    <div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Today</span>
                        <span className="text-bessify-green-600 font-medium">$12.40</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">This Week</span>
                        <span className="text-bessify-green-600 font-medium">$82.15</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">This Month</span>
                        <span className="text-bessify-green-600 font-medium">$342.18</span>
                      </div>
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">This Year</span>
                        <span className="text-bessify-green-600 font-medium">$1,845.60</span>
                      </div>
                      <div className="h-px bg-gray-200 my-4"></div>
                      <div className="flex justify-between font-medium">
                        <span>Total Lifetime Savings</span>
                        <span className="text-bessify-green-600">$4,210.85</span>
                      </div>
                    </div>
                    
                    <div className="bg-bessify-green-50 p-4 rounded-lg border border-bessify-green-100">
                      <div className="flex items-start">
                        <div className="bg-bessify-green-100 p-2 rounded-full mr-4">
                          <Leaf className="h-5 w-5 text-bessify-green-600" />
                        </div>
                        <div>
                          <h5 className="font-medium mb-1">Environmental Impact</h5>
                          <p className="text-sm text-gray-600 mb-2">Your BESS has helped reduce:</p>
                          <p className="text-sm">
                            <strong>5.2 tons</strong> of CO₂ emissions this year
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
          
          {/* System Status & Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 md:col-span-2">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-medium">System Status</h4>
                <button className="text-sm text-bessify-green-600 hover:underline">View Details</button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500 mb-1">Inverter</div>
                  <div className="flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-1.5"></div>
                    <span className="font-medium">Operational</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500 mb-1">Battery Pack</div>
                  <div className="flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-1.5"></div>
                    <span className="font-medium">Healthy</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500 mb-1">Connectivity</div>
                  <div className="flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-1.5"></div>
                    <span className="font-medium">Online</span>
                  </div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg text-center">
                  <div className="text-sm text-gray-500 mb-1">BMS</div>
                  <div className="flex items-center justify-center">
                    <div className="h-3 w-3 rounded-full bg-green-500 mr-1.5"></div>
                    <span className="font-medium">Active</span>
                  </div>
                </div>
              </div>
            </Card>
            
            <Card className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-lg font-medium">Recent Alerts</h4>
                <button className="text-sm text-bessify-green-600 hover:underline">View All</button>
              </div>
              <div className="space-y-3">
                {alerts.map((alert, index) => (
                  <div key={index} className={`p-3 rounded-lg ${
                    alert.type === 'warning' ? 'bg-amber-50 border border-amber-100' :
                    alert.type === 'info' ? 'bg-blue-50 border border-blue-100' :
                    'bg-green-50 border border-green-100'
                  }`}>
                    <div className="flex items-start">
                      <AlertCircle className={`h-5 w-5 mr-2 ${
                        alert.type === 'warning' ? 'text-amber-500' :
                        alert.type === 'info' ? 'text-blue-500' :
                        'text-green-500'
                      }`} />
                      <span className="text-sm">{alert.message}</span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardPage;
