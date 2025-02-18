import { A, Outlet } from "@solidjs/router";
import { For, Suspense, createResource } from "solid-js";

import { fetchPosts } from "../lib/db";

export default function Page({ useLoader }) {
	const [postsLoader] = createResource(() => fetchPosts());
	return (
		<Suspense>
			<div class="p-2 flex gap-2">
				Postsasas
				<ul class="list-disc pl-4">
					<For each={postsLoader()}>
						{(post) => (
							<li key={post.id} class="whitespace-nowrap">
								<A
									href={`/posts/${post.id}`}
									class="block py-1 text-blue-800 hover:text-blue-600"
									activeClass="text-black font-bold"
								>
									<div>{post.title.substring(0, 20)}</div>
								</A>
							</li>
						)}
						{/* {(post) => {
							return (
								<li key={post.id} class="whitespace-nowrap">
									<A	
										href={`/posts/${post.id}`}
										class="block py-1 text-blue-800 hover:text-blue-600"
										activeClass="text-black font-bold"
									>
										<div>{post.title.substring(0, 20)}</div>
									</A>
								</li>
							);
						}} */}
					</For>
				</ul>
				<hr />
				<Outlet />
			</div>
		</Suspense>
	);
}
