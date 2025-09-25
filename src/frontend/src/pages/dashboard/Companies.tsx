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
          </tbody>
        </table>
      </div>
    </Motion.div>
  </DashboardLayout>
);

export default CompanyList;
