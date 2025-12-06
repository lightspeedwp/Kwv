import React, { useState } from 'react';
import { Layout } from '../components/layout/Layout';
import { Container } from '../components/common/Container';
import { Typography } from '../components/common/Typography';
import { Button } from '../components/common/Button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { User, Eye, EyeOff } from 'lucide-react';
import { Checkbox } from '../components/common/Checkbox';

export const MyAccount: React.FC = () => {
  // Mock auth state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [showPassword, setShowPassword] = useState(false);
  
  // Address Editing State
  const [editingAddress, setEditingAddress] = useState<'billing' | 'shipping' | null>(null);

  // Order View State
  const [viewingOrder, setViewingOrder] = useState<string | null>(null);

  // Helper to get page title based on active state
  const getPageTitle = () => {
    if (viewingOrder) return `Order #${viewingOrder}`;
    if (activeTab === 'addresses') return 'Addresses';
    if (activeTab === 'orders') return 'Orders';
    if (activeTab === 'downloads') return 'Downloads';
    if (activeTab === 'account') return 'Account details';
    return 'My account';
  };

  if (!isLoggedIn) {
    return (
      <Layout>
        <Container variant="site" className="py-20">
          <Typography variant="h1" className="mb-16 font-normal text-5xl text-[#333333]">My account</Typography>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* Login */}
            <div>
              <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[#333333]">Login</Typography>
              <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); setIsLoggedIn(true); }}>
                <div className="border border-gray-200 p-8 rounded-sm">
                   <div className="space-y-5">
                      <div>
                        <label className="block text-base text-[#333333] mb-2">Username or email address <span className="text-red-500">*</span></label>
                        <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black focus:ring-0 outline-none transition-colors" required />
                      </div>
                      <div>
                        <label className="block text-base text-[#333333] mb-2">Password <span className="text-red-500">*</span></label>
                        <div className="relative">
                           <input 
                              type={showPassword ? "text" : "password"} 
                              className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black focus:ring-0 outline-none transition-colors" 
                              required 
                           />
                           <button 
                              type="button" 
                              onClick={() => setShowPassword(!showPassword)}
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                           >
                              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                           </button>
                        </div>
                      </div>
                      
                      <div className="flex items-center gap-2 pt-2">
                         <Button type="submit" className="bg-[#111111] text-white hover:bg-black h-12 px-8 rounded-none font-normal text-base">Log in</Button>
                         <label className="flex items-center text-base text-[#333333] ml-2 cursor-pointer">
                            <Checkbox className="mr-2 w-4 h-4" /> Remember me
                         </label>
                      </div>
                      
                      <div className="pt-2">
                         <a href="#" className="text-base text-[#333333] hover:underline">Lost your password?</a>
                      </div>
                   </div>
                </div>
              </form>
            </div>

            {/* Register */}
            <div>
              <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[#333333]">Register</Typography>
              <form className="space-y-6">
                <div className="border border-gray-200 p-8 rounded-sm">
                   <div className="space-y-5">
                      <div>
                        <label className="block text-base text-[#333333] mb-2">Email address <span className="text-red-500">*</span></label>
                        <input type="email" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black focus:ring-0 outline-none transition-colors" required />
                      </div>
                      
                      <div className="text-base text-[#333333] space-y-4">
                        <p>A link to set a new password will be sent to your email address.</p>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#" className="underline">privacy policy</a>.</p>
                      </div>
                      
                      <Button className="bg-[#111111] text-white hover:bg-black h-12 px-10 rounded-none font-normal text-base w-auto">Register</Button>
                   </div>
                </div>
              </form>
            </div>
          </div>
        </Container>
      </Layout>
    );
  }

  const renderOrderDetails = () => (
    <div>
      <p className="text-base text-[#333333] mb-8">
        Order <strong>#{viewingOrder}</strong> was placed on <strong>December 6, 2025</strong> and is currently <strong>On hold</strong>.
      </p>

      <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[#333333]">Order details</Typography>
      
      <table className="w-full text-left border-collapse mb-12">
         <thead>
            <tr className="border-b-2 border-gray-100">
               <th className="py-4 font-bold text-[#333333] w-2/3">Product</th>
               <th className="py-4 font-bold text-[#333333]">Total</th>
            </tr>
         </thead>
         <tbody className="divide-y divide-gray-100 border-b border-gray-200">
            <tr>
               <td className="py-4 text-[#333333]">
                  <a href="#" className="text-[#8B0000] hover:underline">Album</a> <strong className="text-[#333333]">× 1</strong>
               </td>
               <td className="py-4 text-[#333333]">$15.00</td>
            </tr>
            <tr>
               <td className="py-4 text-[#333333]">
                  <a href="#" className="text-[#8B0000] hover:underline">Cap</a> <strong className="text-[#333333]">× 1</strong>
               </td>
               <td className="py-4 text-[#333333]">$16.00</td>
            </tr>
            <tr>
               <td className="py-4 text-[#333333]">
                  <a href="#" className="text-[#8B0000] hover:underline">Long Sleeve Tee</a> <strong className="text-[#333333]">× 1</strong>
               </td>
               <td className="py-4 text-[#333333]">$25.00</td>
            </tr>
            <tr>
               <td className="py-4 font-bold text-[#333333]">Subtotal:</td>
               <td className="py-4 font-bold text-[#333333]">$56.00</td>
            </tr>
            <tr>
               <td className="py-4 font-bold text-[#333333]">Shipping:</td>
               <td className="py-4 text-[#333333]">
                  <span className="font-bold block mb-1">Collection from Dispatch:</span>
                  46 Devon Street, Cape Town, Western Cape, 7015<br/>
                  Local Pickup
               </td>
            </tr>
            <tr>
               <td className="py-4 font-bold text-[#333333]">Total:</td>
               <td className="py-4 font-bold text-[#333333]">$56.00</td>
            </tr>
            <tr>
               <td className="py-4 font-bold text-[#333333]">Payment method:</td>
               <td className="py-4 font-bold text-[#333333]">Direct bank transfer</td>
            </tr>
         </tbody>
      </table>

      <Typography variant="h3" className="mb-6 !text-2xl font-normal text-[#333333]">Billing address</Typography>
      <div className="border border-gray-200 p-6 rounded-sm max-w-md">
         <address className="not-italic text-base text-[#333333] leading-relaxed">
            Ash Shaw<br/>
            LightSpeed<br/>
            46 Devon Street<br/>
            Woodstock, Cape Town<br/>
            Western Cape<br/>
            7925<br/>
            <br/>
            +27845656767<br/>
            ashley@lightspeedwp.agency
         </address>
      </div>

      <div className="mt-8">
        <Button 
          variant="outline" 
          onClick={() => setViewingOrder(null)}
          className="rounded-none border-gray-300 text-[#333333] hover:bg-gray-50"
        >
          Back to orders
        </Button>
      </div>
    </div>
  );

  return (
    <Layout>
      <Container variant="site" className="py-20">
        <Typography variant="h1" className="mb-16 font-normal text-5xl text-[#333333]">
          {getPageTitle()}
        </Typography>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex flex-col lg:flex-row gap-24 items-start">
           
           {/* Sidebar */}
           <div className="w-full lg:w-48 flex-shrink-0">
              <div className="flex flex-col items-center mb-10 text-center">
                 <div className="w-24 h-24 bg-gray-200 rounded-full mb-4 flex items-center justify-center text-white">
                    <User size={64} fill="currentColor" className="text-white" />
                 </div>
                 <span className="text-base text-[#333333]">admin</span>
              </div>

              <TabsList className="flex flex-col h-auto w-full bg-transparent space-y-4 p-0">
                 {['Dashboard', 'Orders', 'Downloads', 'Addresses', 'Account details'].map((tab) => {
                    const value = tab.toLowerCase().replace(' ', '');
                    // Map "Account details" to "account"
                    const tabValue = tab === 'Account details' ? 'account' : value;
                    
                    return (
                      <TabsTrigger 
                          key={tabValue}
                          value={tabValue} 
                          className="justify-start px-0 py-0 text-base font-normal text-[#333333] data-[state=active]:underline data-[state=active]:text-black data-[state=active]:bg-transparent border-none w-full rounded-none hover:text-black transition-none bg-transparent shadow-none"
                          onClick={() => setViewingOrder(null)} // Reset order view when changing tabs
                      >
                          {tab}
                      </TabsTrigger>
                    );
                 })}
                 <button 
                    onClick={() => setIsLoggedIn(false)} 
                    className="flex items-center w-full px-0 py-0 text-left text-base font-normal text-[#333333] hover:text-black transition-colors"
                 >
                    Log out
                 </button>
              </TabsList>
           </div>

           {/* Content */}
           <div className="flex-1 w-full">
              <TabsContent value="dashboard" className="mt-0">
                 <div className="text-base text-[#333333] leading-relaxed">
                    <p className="mb-4">
                       Hello <strong>admin</strong> (not <strong>admin</strong>? <button onClick={() => setIsLoggedIn(false)} className="underline hover:no-underline">Log out</button>)
                    </p>
                    <p>
                       From your account dashboard you can view your <button onClick={() => setActiveTab('orders')} className="underline hover:no-underline">recent orders</button>, 
                       manage your <button onClick={() => setActiveTab('addresses')} className="underline hover:no-underline">shipping and billing addresses</button>, 
                       and <button onClick={() => setActiveTab('account')} className="underline hover:no-underline">edit your password and account details</button>.
                    </p>
                 </div>
              </TabsContent>

              <TabsContent value="orders" className="mt-0">
                 {viewingOrder ? renderOrderDetails() : (
                   <div className="overflow-x-auto">
                      <table className="w-full text-left border-collapse min-w-[600px]">
                         <thead>
                            <tr className="border-b border-gray-200">
                               <th className="py-3 px-4 font-bold text-[#333333]">Order</th>
                               <th className="py-3 px-4 font-bold text-[#333333]">Date</th>
                               <th className="py-3 px-4 font-bold text-[#333333]">Status</th>
                               <th className="py-3 px-4 font-bold text-[#333333]">Total</th>
                               <th className="py-3 px-4 font-bold text-[#333333] text-right">Actions</th>
                            </tr>
                         </thead>
                         <tbody className="divide-y divide-gray-100">
                            <tr className="border-b border-gray-100">
                               <td className="py-6 px-4 text-[#333333] font-bold underline"><a href="#" onClick={(e) => { e.preventDefault(); setViewingOrder('260'); }}>#260</a></td>
                               <td className="py-6 px-4 text-[#333333]">December 6, 2025</td>
                               <td className="py-6 px-4 text-[#333333]">On hold</td>
                               <td className="py-6 px-4 text-[#333333]">$56.00 for 3 items</td>
                               <td className="py-6 px-4 text-right">
                                  <Button size="sm" onClick={() => setViewingOrder('260')} className="bg-[#111111] text-white hover:bg-black rounded-none h-10 px-6 font-normal">View</Button>
                               </td>
                            </tr>
                            <tr className="border-b border-gray-100">
                               <td className="py-6 px-4 text-[#333333] font-bold underline"><a href="#" onClick={(e) => { e.preventDefault(); setViewingOrder('219'); }}>#219</a></td>
                               <td className="py-6 px-4 text-[#333333]">December 6, 2025</td>
                               <td className="py-6 px-4 text-[#333333]">On hold</td>
                               <td className="py-6 px-4 text-[#333333]">$88.00 for 3 items</td>
                               <td className="py-6 px-4 text-right">
                                  <Button size="sm" onClick={() => setViewingOrder('219')} className="bg-[#111111] text-white hover:bg-black rounded-none h-10 px-6 font-normal">View</Button>
                               </td>
                            </tr>
                         </tbody>
                      </table>
                   </div>
                 )}
              </TabsContent>

              <TabsContent value="downloads" className="mt-0">
                 <div className="bg-[#F7F7F7] p-8 flex justify-between items-center border-t border-b border-[#0073aa] md:border-l-4 md:border-t-0 md:border-b-0 md:border-r-0 border-l-0 border-r-0">
                    <span className="text-[#333333]">No downloads available yet.</span>
                    <a href="/shop" className="text-[#8B0000] font-bold text-sm hover:underline">BROWSE PRODUCTS</a>
                 </div>
              </TabsContent>

              <TabsContent value="addresses" className="mt-0">
                 {editingAddress ? (
                    <div>
                       <Typography variant="h3" className="mb-8 !text-3xl font-normal text-[#333333]">
                          {editingAddress === 'billing' ? 'Billing address' : 'Shipping address'}
                       </Typography>
                       
                       <form className="max-w-3xl space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                             <div>
                                <label className="block text-base text-[#333333] mb-2">First name <span className="text-red-500">*</span></label>
                                <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="Ash" />
                             </div>
                             <div>
                                <label className="block text-base text-[#333333] mb-2">Last name <span className="text-red-500">*</span></label>
                                <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="Shaw" />
                             </div>
                          </div>

                          <div>
                             <label className="block text-base text-[#333333] mb-2">Company name (optional)</label>
                             <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="LightSpeed" />
                          </div>

                          <div>
                             <label className="block text-base text-[#333333] mb-2">Country / Region <span className="text-red-500">*</span></label>
                             <select className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none bg-white">
                                <option>South Africa</option>
                             </select>
                          </div>

                          <div>
                             <label className="block text-base text-[#333333] mb-2">Street address <span className="text-red-500">*</span></label>
                             <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none mb-3" defaultValue="46 Devon Street" placeholder="House number and street name" />
                             <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" placeholder="Apartment, suite, unit, etc. (optional)" />
                          </div>

                          <div>
                             <label className="block text-base text-[#333333] mb-2">Town / City <span className="text-red-500">*</span></label>
                             <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="Woodstock, Cape Town" />
                          </div>

                          <div>
                             <label className="block text-base text-[#333333] mb-2">Province <span className="text-red-500">*</span></label>
                             <select className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none bg-white">
                                <option>Western Cape</option>
                             </select>
                          </div>

                          <div>
                             <label className="block text-base text-[#333333] mb-2">Postcode / ZIP <span className="text-red-500">*</span></label>
                             <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="7925" />
                          </div>

                          <div>
                             <label className="block text-base text-[#333333] mb-2">Phone (optional)</label>
                             <input type="tel" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="+27845656787" />
                          </div>

                          <div>
                             <label className="block text-base text-[#333333] mb-2">Email address <span className="text-red-500">*</span></label>
                             <input type="email" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="ashley@lightspeedwp.agency" />
                          </div>

                          <div className="pt-4">
                             <Button type="submit" className="bg-[#111111] text-white hover:bg-black h-12 px-8 rounded-none font-normal text-base w-auto" onClick={(e) => { e.preventDefault(); setEditingAddress(null); }}>
                                Save address
                             </Button>
                          </div>
                       </form>
                    </div>
                 ) : (
                    <div>
                       <p className="text-base text-[#333333] mb-8">The following addresses will be used on the checkout page by default.</p>
                       <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                          <div>
                             <header className="mb-4">
                                <h3 className="text-3xl font-normal text-[#333333] mb-2">Billing address</h3>
                                <button onClick={() => setEditingAddress('billing')} className="text-[#8B0000] text-base underline hover:no-underline">Edit Billing address</button>
                             </header>
                             <address className="not-italic text-base text-[#333333] leading-relaxed italic">
                                Ash Shaw<br/>
                                LightSpeed<br/>
                                46 Devon Street<br/>
                                Woodstock, Cape Town<br/>
                                Western Cape<br/>
                                7925
                             </address>
                          </div>
                          <div>
                             <header className="mb-4">
                                <h3 className="text-3xl font-normal text-[#333333] mb-2">Shipping address</h3>
                                <button onClick={() => setEditingAddress('shipping')} className="text-[#8B0000] text-base underline hover:no-underline">Edit Shipping address</button>
                             </header>
                             <address className="not-italic text-base text-[#333333] leading-relaxed italic">
                                Ash Shaw<br/>
                                LightSpeed<br/>
                                46 Devon Street<br/>
                                Woodstock, Cape Town<br/>
                                Western Cape<br/>
                                7925
                             </address>
                          </div>
                       </div>
                    </div>
                 )}
              </TabsContent>
              
              <TabsContent value="account" className="mt-0">
                 <form className="max-w-3xl space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                       <div>
                          <label className="block text-base text-[#333333] mb-2">First name <span className="text-red-500">*</span></label>
                          <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="Admin" />
                       </div>
                       <div>
                          <label className="block text-base text-[#333333] mb-2">Last name <span className="text-red-500">*</span></label>
                          <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="User" />
                       </div>
                    </div>

                    <div>
                       <label className="block text-base text-[#333333] mb-2">Display name <span className="text-red-500">*</span></label>
                       <input type="text" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="admin" />
                       <p className="text-sm text-gray-500 mt-1 italic">This will be how your name will be displayed in the account section and in reviews</p>
                    </div>

                    <div>
                       <label className="block text-base text-[#333333] mb-2">Email address <span className="text-red-500">*</span></label>
                       <input type="email" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none" defaultValue="admin@kwv.co.za" />
                    </div>

                    <fieldset className="border border-gray-300 p-6 mt-8">
                       <legend className="px-2 text-base text-[#333333]">Password change</legend>
                       <div className="space-y-5">
                          <div>
                             <label className="block text-base text-[#333333] mb-2">Current password (leave blank to leave unchanged)</label>
                             <div className="relative">
                                <input type="password" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none pr-10" />
                                <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" size={20} />
                             </div>
                          </div>
                          <div>
                             <label className="block text-base text-[#333333] mb-2">New password (leave blank to leave unchanged)</label>
                             <div className="relative">
                                <input type="password" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none pr-10" />
                                <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" size={20} />
                             </div>
                          </div>
                          <div>
                             <label className="block text-base text-[#333333] mb-2">Confirm new password</label>
                             <div className="relative">
                                <input type="password" className="w-full h-12 px-4 border border-gray-300 rounded-none focus:border-black outline-none pr-10" />
                                <EyeOff className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer" size={20} />
                             </div>
                          </div>
                       </div>
                    </fieldset>
                    
                    <div className="pt-4">
                       <Button type="submit" className="bg-[#111111] text-white hover:bg-black h-12 px-8 rounded-none font-normal text-base w-auto">Save changes</Button>
                    </div>
                 </form>
              </TabsContent>
           </div>
        </Tabs>
      </Container>
    </Layout>
  );
};
