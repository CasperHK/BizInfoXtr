import { Motion } from 'solid-motionone';
import DashboardLayout from '../../layouts/DashboardLayout';

const CompanyList = () => (
  <DashboardLayout>
    <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }} class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold text-blue-700 mb-4">Company List</h1>
      <p class="text-lg text-gray-700 mb-6">Browse and manage all companies in your database.</p>
      <div class="overflow-x-auto">
        <table class="min-w-full bg-white rounded-lg shadow">
          <thead>
            <tr>
              <th class="px-4 py-2 text-left">Name</th>
              <th class="px-4 py-2 text-left">Region</th>
              <th class="px-4 py-2 text-left">Contact</th>
              <th class="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* Example static rows, replace with dynamic data later */}
            <tr class="border-t">
              <td class="px-4 py-2">Acme Corp</td>
              <td class="px-4 py-2">USA</td>
              <td class="px-4 py-2">info@acme.com</td>
              <td class="px-4 py-2">
                <a href="/dashboard/companies/1" class="text-blue-600 hover:underline mr-2">Details</a>
                <a href="/dashboard/companies/1/edit" class="text-green-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Globex Ltd</td>
              <td class="px-4 py-2">UK</td>
              <td class="px-4 py-2">contact@globex.co.uk</td>
              <td class="px-4 py-2">
                <a href="/dashboard/companies/2" class="text-blue-600 hover:underline mr-2">Details</a>
                <a href="/dashboard/companies/2/edit" class="text-green-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Initech</td>
              <td class="px-4 py-2">Canada</td>
              <td class="px-4 py-2">hello@initech.ca</td>
              <td class="px-4 py-2">
                <a href="/dashboard/companies/3" class="text-blue-600 hover:underline mr-2">Details</a>
                <a href="/dashboard/companies/3/edit" class="text-green-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Umbrella Inc</td>
              <td class="px-4 py-2">Germany</td>
              <td class="px-4 py-2">contact@umbrella.de</td>
              <td class="px-4 py-2">
                <a href="/dashboard/companies/4" class="text-blue-600 hover:underline mr-2">Details</a>
                <a href="/dashboard/companies/4/edit" class="text-green-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Wayne Enterprises</td>
              <td class="px-4 py-2">USA</td>
              <td class="px-4 py-2">info@wayne.com</td>
              <td class="px-4 py-2">
                <a href="/dashboard/companies/5" class="text-blue-600 hover:underline mr-2">Details</a>
                <a href="/dashboard/companies/5/edit" class="text-green-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Stark Industries</td>
              <td class="px-4 py-2">USA</td>
              <td class="px-4 py-2">contact@stark.com</td>
              <td class="px-4 py-2">
                <a href="/dashboard/companies/6" class="text-blue-600 hover:underline mr-2">Details</a>
                <a href="/dashboard/companies/6/edit" class="text-green-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Hooli</td>
              <td class="px-4 py-2">USA</td>
              <td class="px-4 py-2">info@hooli.com</td>
              <td class="px-4 py-2">
                <a href="/dashboard/companies/7" class="text-blue-600 hover:underline mr-2">Details</a>
                <a href="/dashboard/companies/7/edit" class="text-green-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Soylent Corp</td>
              <td class="px-4 py-2">USA</td>
              <td class="px-4 py-2">hello@soylent.com</td>
              <td class="px-4 py-2">
                <a href="/dashboard/companies/8" class="text-blue-600 hover:underline mr-2">Details</a>
                <a href="/dashboard/companies/8/edit" class="text-green-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Massive Dynamic</td>
              <td class="px-4 py-2">USA</td>
              <td class="px-4 py-2">contact@massivedynamic.com</td>
              <td class="px-4 py-2">
                <a href="/dashboard/companies/9" class="text-blue-600 hover:underline mr-2">Details</a>
                <a href="/dashboard/companies/9/edit" class="text-green-600 hover:underline">Edit</a>
              </td>
            </tr>
            <tr class="border-t">
              <td class="px-4 py-2">Vandelay Industries</td>
              <td class="px-4 py-2">USA</td>
              <td class="px-4 py-2">info@vandelay.com</td>
              <td class="px-4 py-2">
                <a href="/dashboard/companies/10" class="text-blue-600 hover:underline mr-2">Details</a>
                <a href="/dashboard/companies/10/edit" class="text-green-600 hover:underline">Edit</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </Motion.div>
  </DashboardLayout>
);

export default CompanyList;
