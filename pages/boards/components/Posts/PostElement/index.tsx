import styles from "./styles.module.scss";
import Image from "next/image";
import likeIcon from "@/assets/icons/ic_like.svg";
import profileImg from "@/assets/icons/profileImg.svg";

interface Post {
  id: number;
  title: string;
  writer: { nickname: string };
  likeCount: number;
  updatedAt: string;
  image?: string;
}

interface PostElementProps {
  post: Post;
}

export default function PostElement({ post }: PostElementProps) {
  return (
    <>
      <div className={styles["post-container"]}>
        <div className="contents-wrapper">
          <div className={styles["contents"]}>
            <p className={styles["contents-title"]}>{post.title}</p>
            <div
              className={
                post.image
                  ? styles["image-container"]
                  : styles["empty-image-container"]
              }
            >
              {post.image ? (
                <Image
                  width={42}
                  height={42}
                  src={post.image}
                  alt="게시글이미지"
                />
              ) : (
                <div className={styles["empty-image"]}></div>
              )}
            </div>
          </div>
          <div className={styles["contents-footer"]}>
            <div className={styles["contents-footer-left"]}>
              <Image
                className={styles["profile-img"]}
                src={profileImg}
                alt="프로필이미지"
              />
              <p>{post.writer.nickname}</p>
              <p>{new Date(post.updatedAt).toLocaleDateString()}</p>
            </div>
            <div className={styles["like"]}>
              <Image src={likeIcon} alt="좋아요하트" />
              <p>{post.likeCount}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
