"use client";

import Headers from "@/components/Header";
import CreateContact from "@/components/SVGs/CreateContact";
import CreateGroup from "@/components/SVGs/CreateGroup";
import Link from "next/link";
import DisplayPic from "@/components/SVGs/DisplayPic";
import contacts from "@/DummyData/contacts.json";

function page() {
  return (
    <main className="h-full">
        <Headers
          title="Your contacts"
          description={contacts.length + " contacts"}
          searchEnabled={true}
        />
      <div>
        <div className="flex gap-10 items-center p-3">
          <CreateGroup />
          <h5 className="text-textPrimary-light dark:text-textPrimary-dark font-medium">
            New Group
          </h5>
        </div>
        <Link href="/contact/create">
          <div className="flex gap-10 items-center p-3">
            <CreateContact />
            <h5 className="text-textPrimary-light dark:text-textPrimary-dark font-medium">
              New Contact
            </h5>
          </div>
        </Link>
        <div className="p-3">
          <h5 className="text-textPrimary-light dark:text-textPrimary-dark font-medium">
            Contacts on WeChat
          </h5>
          <div className="flex gap-10 items-center mt-4">
            <DisplayPic />
            <div>
              <h5 className="font-bold text-textPrimary-light dark:text-textPrimary-dark">
                My Space (You)
              </h5>
              <h6 className="text-textSecondary-light dark:text-textSecondary-dark text-xs">
                Message yourself
              </h6>
            </div>
          </div>
          {contacts.map((contact) => (
            <div className="flex gap-10 items-center mt-4">
              <DisplayPic />
              <div>
                <h5 className="font-bold text-textPrimary-light dark:text-textPrimary-dark">
                  {contact.display_name}
                </h5>
                <h6 className="text-textSecondary-light dark:text-textSecondary-dark text-xs">
                  {contact.status}
                </h6>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default page;
