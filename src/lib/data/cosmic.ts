import { createBucketClient } from '@cosmicjs/sdk'
import { PUBLIC_BUCKET_READ_KEY, PUBLIC_BUCKET_SLUG } from '$env/static/public'

const cosmic = createBucketClient({
	bucketSlug: PUBLIC_BUCKET_SLUG ?? '',
	readKey: PUBLIC_BUCKET_READ_KEY ?? ''
})

export default cosmic
