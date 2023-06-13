import UserCard from '@/components/UserCard/UserCard';
import styles from './page.module.css';
import { prisma } from "@/app/lib/prisma";

export default async function Users() {
    // throw Error('it is just an error') for showing error
    const users = await prisma.user.findMany();

    return (
        <div className={styles.grid}>
            {users.map((user) => {
                return <UserCard key={user.id} {...user} />;
            })}
        </div>
    );
}