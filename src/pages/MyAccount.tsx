import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { COLORS } from '../constants/theme';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Package, MapPin, User, LogOut } from 'lucide-react';
import { FAQSection } from '../components/sections/FAQSection';

export const MyAccount: React.FC = () => {
  // Mock auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return (
      <Layout>
        <Container variant="content" className="py-20">
          <Typography variant="h1" className="text-center mb-12" color={COLORS.darkBrown}>My Account</Typography>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Login */}
            <div className="p-8 bg-gray-50 rounded-sm">
              <Typography variant="h3" className="mb-6">Login</Typography>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Username or email address *</label>
                  <input type="text" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#DAA520] outline-none" required />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                  <input type="password" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#DAA520] outline-none" required />
                </div>
                <div className="flex items-center justify-between">
                   <label className="flex items-center text-sm text-gray-600">
                      <input type="checkbox" className="mr-2" /> Remember me
                   </label>
                   <a href="#" className="text-sm text-[#8B0000] hover:underline">Lost your password?</a>
                </div>
                <Button type="submit" className="w-full bg-[#2C1810] text-white">Log In</Button>
              </form>
            </div>

            {/* Register */}
            <div className="p-8 border border-gray-200 rounded-sm">
              <Typography variant="h3" className="mb-6">Register</Typography>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email address *</label>
                  <input type="email" className="w-full p-3 border border-gray-300 rounded-sm focus:border-[#DAA520] outline-none" required />
                </div>
                <div className="text-sm text-gray-600">
                  <p>A link to set a new password will be sent to your email address.</p>
                  <p className="mt-4">Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</p>
                </div>
                <Button variant="outline" className="w-full">Register</Button>
              </form>
            </div>
          </div>
        </Container>
        
        <FAQSection items={[
            { question: "How do I reset my password?", answer: "If you've lost your password, click the 'Lost your password?' link on the login form to receive a reset link via email." },
            { question: "Is my personal data safe?", answer: "Yes, we take data privacy seriously. Your information is encrypted and used only for processing orders and managing your account." }
        ]} />
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="bg-[#F9F9F9] py-10 border-b border-gray-200">
         <Container variant="site">
            <Typography variant="h2" color={COLORS.darkBrown}>My Dashboard</Typography>
         </Container>
      </div>
      <Container variant="site" className="py-12">
        <Tabs defaultValue="orders" className="flex flex-col md:flex-row gap-8">
           <TabsList className="flex flex-col h-auto w-full md:w-64 bg-transparent space-y-2">
              <TabsTrigger value="orders" className="justify-start px-4 py-3 data-[state=active]:bg-[#2C1810] data-[state=active]:text-white rounded-sm w-full border border-transparent hover:bg-gray-100">
                 <Package size={18} className="mr-2" /> Orders
              </TabsTrigger>
              <TabsTrigger value="addresses" className="justify-start px-4 py-3 data-[state=active]:bg-[#2C1810] data-[state=active]:text-white rounded-sm w-full border border-transparent hover:bg-gray-100">
                 <MapPin size={18} className="mr-2" /> Addresses
              </TabsTrigger>
              <TabsTrigger value="account" className="justify-start px-4 py-3 data-[state=active]:bg-[#2C1810] data-[state=active]:text-white rounded-sm w-full border border-transparent hover:bg-gray-100">
                 <User size={18} className="mr-2" /> Account Details
              </TabsTrigger>
              <button onClick={() => setIsLoggedIn(false)} className="flex items-center w-full px-4 py-3 text-left text-red-700 hover:bg-red-50 rounded-sm transition-colors">
                 <LogOut size={18} className="mr-2" /> Logout
              </button>
           </TabsList>

           <div className="flex-1">
              <TabsContent value="orders">
                 <Typography variant="h3" className="mb-6">Recent Orders</Typography>
                 <div className="border border-gray-200 rounded-sm overflow-hidden">
                    <table className="w-full text-left text-sm">
                       <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                             <th className="p-4 font-medium text-gray-600">Order</th>
                             <th className="p-4 font-medium text-gray-600">Date</th>
                             <th className="p-4 font-medium text-gray-600">Status</th>
                             <th className="p-4 font-medium text-gray-600">Total</th>
                             <th className="p-4 font-medium text-gray-600">Actions</th>
                          </tr>
                       </thead>
                       <tbody className="divide-y divide-gray-100">
                          <tr>
                             <td className="p-4">#1234</td>
                             <td className="p-4">May 10, 2024</td>
                             <td className="p-4"><span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-bold">Completed</span></td>
                             <td className="p-4">R 1,450.00</td>
                             <td className="p-4"><Button size="sm" variant="outline">View</Button></td>
                          </tr>
                          <tr>
                             <td className="p-4">#1235</td>
                             <td className="p-4">June 2, 2024</td>
                             <td className="p-4"><span className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-bold">Processing</span></td>
                             <td className="p-4">R 890.00</td>
                             <td className="p-4"><Button size="sm" variant="outline">View</Button></td>
                          </tr>
                       </tbody>
                    </table>
                 </div>
              </TabsContent>

              <TabsContent value="addresses">
                 <Typography variant="h3" className="mb-6">Addresses</Typography>
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="p-6 border border-gray-200 rounded-sm">
                       <div className="flex justify-between items-start mb-4">
                          <Typography variant="h4">Billing Address</Typography>
                          <a href="#" className="text-[#8B0000] text-sm">Edit</a>
                       </div>
                       <address className="text-gray-600 not-italic text-sm leading-relaxed">
                          John Doe<br/>
                          123 Vineyard Lane<br/>
                          Stellenbosch<br/>
                          7600<br/>
                          South Africa
                       </address>
                    </div>
                    <div className="p-6 border border-gray-200 rounded-sm">
                       <div className="flex justify-between items-start mb-4">
                          <Typography variant="h4">Shipping Address</Typography>
                          <a href="#" className="text-[#8B0000] text-sm">Edit</a>
                       </div>
                       <address className="text-gray-600 not-italic text-sm leading-relaxed">
                          John Doe<br/>
                          123 Vineyard Lane<br/>
                          Stellenbosch<br/>
                          7600<br/>
                          South Africa
                       </address>
                    </div>
                 </div>
              </TabsContent>
              
              <TabsContent value="account">
                 <Typography variant="h3" className="mb-6">Account Details</Typography>
                 <form className="max-w-lg space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                       <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                          <input type="text" className="w-full p-2 border border-gray-300 rounded-sm" defaultValue="John" />
                       </div>
                       <div>
                          <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                          <input type="text" className="w-full p-2 border border-gray-300 rounded-sm" defaultValue="Doe" />
                       </div>
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Display Name</label>
                       <input type="text" className="w-full p-2 border border-gray-300 rounded-sm" defaultValue="John Doe" />
                    </div>
                    <div>
                       <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                       <input type="email" className="w-full p-2 border border-gray-300 rounded-sm" defaultValue="john.doe@example.com" />
                    </div>
                    <div className="pt-4">
                       <Typography variant="h4" className="mb-4">Password Change</Typography>
                       <div className="space-y-4">
                          <input type="password" placeholder="Current Password" className="w-full p-2 border border-gray-300 rounded-sm" />
                          <input type="password" placeholder="New Password" className="w-full p-2 border border-gray-300 rounded-sm" />
                          <input type="password" placeholder="Confirm New Password" className="w-full p-2 border border-gray-300 rounded-sm" />
                       </div>
                    </div>
                    <Button type="submit" className="bg-[#2C1810] text-white">Save Changes</Button>
                 </form>
              </TabsContent>
           </div>
        </Tabs>
      </Container>
      
      <FAQSection items={[
         { question: "How do I update my address?", answer: "Navigate to the 'Addresses' tab above and click 'Edit' next to the address you wish to change." },
         { question: "Where can I find my invoice?", answer: "You can view and download invoices for past orders under the 'Orders' tab." },
         { question: "How do I change my password?", answer: "Go to the 'Account Details' tab to update your password and other personal information." }
      ]} />
    </Layout>
  );
};
