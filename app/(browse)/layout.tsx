import { Navbar } from "./_components/navbar";
import { Container } from "./_components/container";
import { SideBar, SidebarSkeleton } from "./_components/sidebar";
import { Suspense } from "react";

const BrowseLayout = ({
     children,
     }: {
         children: React.ReactNode
         }) => {
            return (
                <>
                <Navbar />
                <div className="flex h-full pt-20">
                    <Suspense fallback={<SidebarSkeleton />}>
                    <SideBar />
                    </Suspense>
                    <Container>
                    {children}
                    </Container>
                </div>
                </>
            );
         };

         export default BrowseLayout;